import { Link, NavLink, Outlet } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          {/* Si l'on veut passer d'une page à l'autre, il faut éviter l'utilisation de la balise <a> et provilégier la balise <Link> 
            qui est un composant disponible dans React-Router-DOM perettant le routing sans rafraichissement de la page */}
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {/* Si l'on veut un rendu conditionnel basé sur la présence d'une classe .active alors on peut utiliser les NavLink, qui vont ajouter cette classe à notre élément en cas de route correspondante à l'attribut 'to' */}
              <NavLink className="nav-link" to="/">Home</NavLink>
              <NavLink className="nav-link" to="/about">About</NavLink>
              <NavLink className="nav-link" to="/project">Project</NavLink>
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </div>
          </div>
        </div>
      </nav>
      </header>
      <main>
      <div className="container">
        <div className="row my-3">
          <div className="col-10 offset-1 bg-dark rounded text-light p-3">
            <Outlet />
          </div>
        </div>
        </div>
      </main>
    </div>
  );
}

export default App;
