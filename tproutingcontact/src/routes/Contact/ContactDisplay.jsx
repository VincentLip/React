import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const ContactDisplay = (props) => {

    const contact = useSelector(state => state.contacts.contacts).find(r => r.id === props.contactId)
    const navigate = useNavigate()

    const del = () =>{
        
        navigate("/contacts/delete")

    }

    const edit = () =>{
        
        navigate("/contacts/edit")

    }

    return (

        <>
        <div className="border rounded m-2">
            {contact.lastname} {contact.firstname} {contact.email} 
            <button className="btn btn-danger" onClick={del}>Delete</button>
            <button className="btn btn-warning"onClick={edit}>Edit</button>
        </div>
        </>
    )
}

export default ContactDisplay