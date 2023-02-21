
import { useRef, useState } from 'react';
import { createPortal } from "react-dom";
import { API_KEY } from './apiKey';
import './App.css';
import NavbarComponent from './Component/NavbarComponent';
import ModalComponent from './shared/ModalComponent';

function App() {

  const [modalVisible, setModalVisible] = useState(false)
  const [isLogging, setIsLogging] = useState(false)
  const [isLogged, setIsLogged] = useState(false)

  const emailRef = useRef()
  const passwordRef = useRef()

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

      /* 
        La requête est cependant la même, que l'on cible l'endpoint de connexion ou d'enregistrement
        Via l'utilisation de fetch, on peut envoyer une requête API.

        Pour utiliser fetch(), il faut passer deux paramètres : 
          - L'endpoint à requêter (une addresse URL idéalement en HTTPS)
          - La configuration de la requête qui se présente sous la forme d'un objet en plusieurs parties :
            - La méthode (par défaut GET)
            - Les headers (pour par exemple ajouter le type de document que l'on envoie)
            - Le corps (les données à envoyer à l'API pour qu'elle puisse les traiter et offrir une réponse appropriée)

      */
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

const visible = (event) => {

  setModalVisible(true)
}


  return (
    <>
    <NavbarComponent visible={visible}></NavbarComponent>
    {modalVisible && createPortal(<ModalComponent closeModal={() => setModalVisible(false)}>
        <div className="d-flex justify-content-between align-items center">
        <h3>Register</h3>
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

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
