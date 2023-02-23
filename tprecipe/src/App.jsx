import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPortal } from "react-dom";
import { API_KEY, BASE_DE_DB } from "./apiKey";
import SignForm from "./components/auth/SignForm";
import ModalComponent from "./components/shared/ModalComponent";
import RecipeItemDisplay from "./components/RecipeItem/RecipeItemDisplay";
import RecipeItemForm from "./components/RecipeItem/RecipeItemForm";
import { addRecipeItem, editRecipeAction, removeRecipeItem, setRecipeItem } from "./components/RecipeItem/RecipeItemSlice";


function App() {

  const [isLogged, setIsLogged] = useState(false)
  const [signFormMode, setSignFormMode] = useState("")
  const [recipeFormMode, setRecipeFormMode] = useState("")
  const [selectedRecipe, setSelectedRecipe] = useState(null)

  const dispatch = useDispatch();
  const recipes = useSelector(state => state.recipeItems.recipes)


  const signFormSubmitHandler = async (credentials) => {
    try {
      const URL = signFormMode === "Sign In" ? 
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}` 
      :`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`

      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
      })

      if (!response.ok) {
        throw new Error("Il y a eu un problème lors de " + signFormMode === 'Sign In' ? "la connexion" : "l'enregistrement")
      }

      const data = await response.json() // Dans l'objet data, on aura un JSON qui contiendra plusieurs infos. Celle qui nous intéresse est le .idToken, qui est le token à utiliser pour nos requêtes API de Base de Données 

      localStorage.setItem('token', data.idToken) // Pour le conserver, on le met dans le stockage local du navigateur
      setIsLogged(true)
      setSignFormMode("")
      refreshItems()

    } catch (error) {
      console.error(error.message);
    }
  }

  const logOutHandler = () => {
    localStorage.removeItem('token')    
    setIsLogged(false)
    refreshItems()
  }

  const setSelectedRecipeAndFormMode = ({recipe, mode}) => {
    setSelectedRecipe(recipe)
    setRecipeFormMode(mode)
  }

  const addRecipeHandler = async (recipe) => {
    if (isLogged) {
      const token = localStorage.getItem('token')
      if (token) {
        try {
          const response = await fetch(`${BASE_DE_DB}recipes.json?auth=${token}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(recipe)
          })

          if (!response.ok) {
            throw new Error("Il y a eu un soucis lors de l'ajout d'un recipe.")
          }

          const data = await response.json()

          dispatch(addRecipeItem({...recipe, id: data.name}))
          setRecipeFormMode("")
          refreshItems();

        } catch (error) {
          console.error(error.message);
        }
      }
    }
  }

  const refreshItems = async () => {
    try {
      const response = await fetch(`${BASE_DE_DB}recipes.json`)
  
      if (!response.ok) {
        throw new Error("Il y a eu une erreur lors de la requête GET !")
      }
  
      const data = await response.json()
  
      const tmpRecipes = []
      for (const key in data) {
        tmpRecipes.push({id: key, ...data[key]})
      }
      dispatch(setRecipeItem(tmpRecipes))
      console.log(tmpRecipes)
  
    } catch (error) {
      console.error(error.message);
    }
  }

  const deleteRecipeHandler = async (recipeId) => {

      const token = localStorage.getItem('token')
      if (token) {
        
          try {
            const response = await fetch(`${BASE_DE_DB}recipes/${recipeId}.json?auth=${token}`, {
              method: "DELETE"
            })

            if (!response.ok) {
              throw new Error("Il y a eu un soucis lors de la suppression du contact.")
            }
            dispatch(removeRecipeItem(recipeId))
            setRecipeFormMode("")
          } catch (error) {
            console.error(error.message);
          }
        
      }
    
  }

  const editRecipeHandler = async ({id, ...recipe}) => {

      const token = localStorage.getItem('token')
      if (token) {
          try {
            const response = await fetch(`${BASE_DE_DB}recipes/${id}.json?auth=${token}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(recipe)
            })

            if (!response.ok) {
              throw new Error("Il y a eu un soucis lors de l'édition du contact.")
            }

            const data = await response.json()

          dispatch(editRecipeAction({id,...data}))
            // setContacts([...recipes.filter(c => c.id !== id), {id, ...data}])
            setRecipeFormMode("")
          } catch (error) {
            console.error(error.message);
          }
        }
      
    }
    
  

  


  return (
    <div className="App">
      {signFormMode === "Sign In" && createPortal(<ModalComponent onClose={() => setSignFormMode("")} modalTitle={"Sign In"}>
        <SignForm mode="Sign In" onSubmit={signFormSubmitHandler} />
        </ModalComponent>, document.getElementById("modal-root"))}
      {recipeFormMode === "add" && createPortal(<ModalComponent onClose={() => setRecipeFormMode("")} modalTitle="Add Contact">
        <RecipeItemForm mode="add" onAdd={addRecipeHandler} />
      </ModalComponent>, document.getElementById("modal-root"))}
      {recipeFormMode === "edit" && createPortal(<ModalComponent onClose={() => setRecipeFormMode("")} modalTitle="Edit Contact">
        <RecipeItemForm mode="edit" onEdit={editRecipeHandler} recipe={selectedRecipe} />
      </ModalComponent>, document.getElementById("modal-root"))}
      <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <span className="navbar-brand" style={{cursor: "pointer"}}>
            <i className="bi bi-globe"></i> Recipes
          </span>
          <div id="navbarContacts">
            {isLogged ? (
              <button  onClick={logOutHandler} className="ms-auto btn btn-secondary">Sign Out</button>
              ) : (
                <>
                  <button onClick={() => setSignFormMode("Sign In")} className="ms-2 btn btn-primary">Sign In</button>
                </>
            )}
          </div>
        </div>
      </nav>
    </header>
    <main className="container">
        <div className="my-3 row">
          <div className="col-10 offset-1 bg-dark text-light p-3 rounded">
            <div className="d-flex justify-content-between align-items-center">
              <h3>Recipes List</h3>
              {isLogged && <button className="btn btn-success" onClick={() => setSelectedRecipeAndFormMode({mode: "add"})}><i className="bi bi-plus-circle"></i> Add</button>}
            </div>
            <hr />
            {recipes.length === 0 ?
            <p>Il n'y a pas de tâche dans la base de données !</p>:
            recipes.map(recipe => <RecipeItemDisplay key={recipe.id} recipeItemId={recipe.id} recipe={recipe} deleteRecipeItem={deleteRecipeHandler} editRecipeItem={editRecipeHandler}/>)}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
