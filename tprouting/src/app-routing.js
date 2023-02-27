import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AboutPage from "./routes/AboutPage";
import ContactPage from "./routes/ContactPage";
import ErrorPage from "./routes/ErrorPage";
import HomePage from "./routes/HomePage";
import ProjectPage from "./routes/ProjectPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
        {
            path: "/",
            element: <HomePage />
        },
        {
            path: "/about",
            element: <AboutPage />
        },
        {
            path: "/project",
            element: <ProjectPage />
        },
        {
            path: "/contact",
            element: <ContactPage />
        },

        ]
    }  

])

export default router