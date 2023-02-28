import { createBrowserRouter } from "react-router-dom";
import App from './App';
import HomePage from "./routes/HomePage";
import ContactListPage from "./routes/Contact/ContactList";
import ContactDisplay from "./routes/Contact/ContactDisplay";
import ContactForm from "./routes/Contact/ContactForm";

const router = createBrowserRouter([

    {
        path: "/",
        element: <App/>,
        children:[
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "/contacts",
                element: <ContactListPage/>

            },
            {
                path:"/contacts/:choice",
                element: <ContactForm/>
            }
        ]
    },
    
    
])

export default router