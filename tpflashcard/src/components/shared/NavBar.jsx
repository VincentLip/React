import { Link, NavLink } from "react-router-dom"


const NavBar = () => {

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to={`/`}><i className="bi bi-globe"></i> Accueil eFlashcard</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to={`/Formulaire`}>Ajouter une Flashcard</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={`/Question`}>Flashcard au hasard</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default NavBar