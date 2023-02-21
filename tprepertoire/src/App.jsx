
import { useEffect, useRef, useState } from 'react';
import { createPortal } from "react-dom";
import { API_KEY } from './apiKey';
import './App.css';
import DirectoryItem from './Component/Directory/DirectoryItem';
import ItemDisplay from './Component/Directory/ItemDisplay';
import NavbarComponent from './Component/NavBar/NavbarComponent';
import ModalComponent from './Component/shared/ModalComponent';
import ModalComponent1 from './Component/shared/ModalComponent1';

function App() {

  const BASE_DB_URL = "https://m2i-demo-auth-trece-default-rtdb.europe-west1.firebasedatabase.app/"
  const [modalVisible, setModalVisible] = useState(false)
  const [modal1Visible, setModal1Visible] = useState(false)
  const [isLogging, setIsLogging] = useState(false)
  const [isLogged, setIsLogged] = useState(false)

  const emailRef = useRef()
  const passwordRef = useRef()
  const [items, setItems] = useState([])

  const submitFormHandler = async (event) => {

    event.preventDefault();

    let BASE_URL = ""

    // En fonction de si l'utilisateur se logue ou s'enregistre, l'endpoint API est différent
    if (isLogging) {
      BASE_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`

    } else {
      BASE_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`
    }

    try {

      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body : JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value,
          returnSecureToken: true
        })
      })
  
      if(!response.ok) {
        throw new Error("Il y a eu une erreur !")
      } 

      const data = await response.json()
      
      localStorage.setItem('token', data.idToken)

      emailRef.current.value = ""
      passwordRef.current.value = ""

      setIsLogged(true)
      setModalVisible(false)
    } catch (error) {
      console.error(error.message);
    }
}

const addItem = async (Item) => {
  console.log(Item)
  try {
    const token = localStorage.getItem('token')
    if (token) {
      const response = await fetch(`${BASE_DB_URL}items.json?auth=${token}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body : JSON.stringify(Item)
      })

      if (!response.ok) {
        throw new Error("Il y a eu un problème !")
      }

      const data = await response.json()
      setItems([...items, {id: data.name, ...Item}])
      refreshItems()

    }
  } catch (error) {
    console.error(error.message);
  }
}
const refreshItems = async () => {
  try {
    const response = await fetch(`${BASE_DB_URL}items.json`)

    if (!response.ok) {
      throw new Error("Il y a eu une erreur lors de la requête GET !")
    }

    const data = await response.json()

    const tmpItems = []
    for (const key in data) {
      tmpItems.push({id: key, ...data[key]})
    }
    setItems(tmpItems)

  } catch (error) {
    console.error(error.message);
  }
}

useEffect(() => {
  refreshItems()
}, [])

const deleteItemHandler = async (itemId) => {
  // eslint-disable-next-line no-restricted-globals
  if(confirm("Etes-vous sûr ?")) {
    const itemFound = items.find(item => item.id === itemId)
    if (itemFound) {
      try {
        const token = localStorage.getItem('token')
        if (token) {
          const response = await fetch(`${BASE_DB_URL}items/${itemId}.json?auth=${token}`, {
            method: "DELETE"
          })

          if (!response.ok) {
            throw new Error("Erreur lors de la requête DELETE !")
          }

          setItems([...items.filter(item => item !== itemFound)])
        }
      } catch (error) {
        console.error(error.message);
      }

    }
  }
}

const visible = (event) => {

  setModalVisible(true)
}

const addContact = (event) => {

  event.preventDefault();
  setModal1Visible(true)
  
}

  return (
    <>
    <NavbarComponent visible={visible}></NavbarComponent>
    {modalVisible && createPortal(<ModalComponent closeModal={() => setModalVisible(false)}>
        <div className="d-flex justify-content-between align-items center">
        <h3>Register /Log-in</h3>
        <button onClick={() =>setModalVisible(false)} className="btn btn-outline-dark rounded-circle"><i className="bi bi-x"></i></button>
        </div>
        <hr />
        <form onSubmit={submitFormHandler}>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email : </label>
            <input type="text" required ref={emailRef} className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password : </label>
            <input type="password" required ref={passwordRef} className="form-control" />
          </div>
          <div className="text-end">
            <button className="btn btn-outline-info me-2" onClick={() => setIsLogging(!isLogging)} >Valider </button>
          </div>
        </form>
      </ModalComponent>, document.getElementById("modal-root"))}
      <div className="container">
        <div className="row g-2 py-3">
          <div className="col-8">
            <div className="bg-dark text-light rounded p-3">
                <button className="btn btn-outline-success" onClick={addContact}>Ajouter</button>
                {modal1Visible && createPortal(<ModalComponent1 closeModal1={() => setModal1Visible(false)}>
                  <DirectoryItem addItem={addItem}></DirectoryItem>
                  </ModalComponent1>, document.getElementById("modal-root"))}
                  {items.length === 0 ? 
                  <p>Il n'y a pas de tâches dans la base de données !</p> : 
                  items.map(item => <ItemDisplay key={item.id} item={item} deleteItem={deleteItemHandler}/>)}
          
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
