import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from './routes/ErrorPage'
import FlashcardDisplay from "./routes/flashcard/flashcardDisplay";
import FlashcardForm from "./routes/flashcard/flashcardForm";
import HomePage from './routes/HomePage'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/Formulaire",
        element: <FlashcardForm/>
      },
      {
        path: "/Question/:flashcardId",
        element: <FlashcardDisplay/>
      },
      
    ]
  }
])

export default router