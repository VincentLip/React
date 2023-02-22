import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPortal } from "react-dom";
import { API_KEY } from "./apiKey";
import SignForm from "./components/auth/SignForm";
import ModalComponent from "./components/shared/ModalComponent";
import RecipeItemDisplay from "./components/RecipeItem/RecipeItemDisplay";
import RecipeItemForm from "./components/RecipeItem/RecipeItemForm";


function App() {

  const [isLogged, setIsLogged] = useState(false)
  const [signFormMode, setSignFormMode] = useState("")
  const [contactFormMode, setContactFormMode] = useState("")
  const [selectedContact, setSelectedContact] = useState(null)


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

    } catch (error) {
      console.error(error.message);
    }
  }

  const logOutHandler = () => {
    localStorage.removeItem('token')    
    setIsLogged(false)
  }

  const setSelectedContactAndFormMode = ({contact, mode}) => {
    setSelectedContact(contact)
    setContactFormMode(mode)
  }

  const addRecipeHandler = async () => {}



  return (
    <div className="App">
      {signFormMode === "Sign In" && createPortal(<ModalComponent onClose={() => setSignFormMode("")} modalTitle={"Sign In"}>
        <SignForm mode="Sign In" onSubmit={signFormSubmitHandler} />
        </ModalComponent>, document.getElementById("modal-root"))}
      {contactFormMode === "add" && createPortal(<ModalComponent onClose={() => setContactFormMode("")} modalTitle="Add Contact">
        <RecipeItemForm mode="add" onAdd={addRecipeHandler} />
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
              {isLogged && <button className="btn btn-success" onClick={() => setSelectedContactAndFormMode({mode: "add"})}><i className="bi bi-plus-circle"></i> Add</button>}
            </div>
            <hr />
            {recipes.length === 0 ?
            <p>Il n'y a pas de tâche dans la base de données !</p>:
            recipes.map(recipe => <RecipeItemDisplay key={recipe.id} recipeItemId={recipe.id} />)}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
