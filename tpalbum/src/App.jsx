import { useDispatch, useSelector } from "react-redux";
import './App.css';
import { removeUser } from "./Component/auth/authSlice";
import { createPortal } from "react-dom";
import Modal from "./Component/shared/Modal";
import { useEffect, useState } from "react";

function App() {
  const [signFormMode, setSignFormMode] = useState("")
  const user = useSelector(state => state.auth.user)
  const dispatch = useDispatch()


  return (
    <div className="App">
      <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <span style={{cursor: "pointer"}} className="navbar-brand" ><i className="bi bi-globe"></i> eAlbum</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#eRecipe-navbar" aria-controls="eRecipe-navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="eRecipe-navbar">
            {user ? (
              <button className="ms-auto btn btn-secondary" onClick={() => dispatch(removeUser())}>Sign Out</button>
              ) : (
              <>
                <button className="ms-auto btn btn-outline-info" onClick={() => setSignFormMode("Sign Up")}>Register</button>
                <button className="ms-2 btn btn-primary" onClick={() => setSignFormMode("Sign In")}>Sign In</button>
              </>
            )}
          </div>
        </div>
      </nav>
      </header>
    </div>
  );
}

export default App;
