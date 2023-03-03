import { useRouteError } from "react-router-dom"
import NavBar from "../components/shared/NavBar"

const ErrorPage = () => {
    const error = useRouteError()
  
    return (
      <div className="App">
        <header>
          <NavBar />
        </header>
        <main className="container">
          <div className="my-3 row">
            <div className="col-10 offset-1 rounded bg-dark p-3 text-light">
              <h3>Error {error.status}</h3>
              <hr />
              <p>{error.data}</p>
            </div>
          </div>
        </main>
      </div>
    )
  }
  
  export default ErrorPage