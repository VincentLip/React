import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SignForm from "./routes/auth/SignForm";
import HomePage from "./routes/HomePage";

const router = createBrowserRouter([

    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "/connexion/signin",
                element: <SignForm/>
            },
            {
                path: "/connexion/signup",
                element: <SignForm/>
            }
        ]
    }
])

export default router