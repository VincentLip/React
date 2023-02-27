import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
  const error = useRouteError() 
  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{height: "100vh", width:"100vw"}}>
      <img src="https://thumbs.dreamstime.com/b/erreur-morte-d-emoji-100387206.jpg" alt="" />
      <p>{error.data}</p>
    </div>
  )
}

export default ErrorPage