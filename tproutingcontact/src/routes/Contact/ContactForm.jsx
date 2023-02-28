import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, useNavigate, useParams, useSearchParams } from "react-router-dom"
import { addContactAction, deleteRecipeAction, editContactAction } from "./ContactSlice"

const ContactForm = (props) => {
    const {choice} = useParams()
    const [searchParams] = useSearchParams()
    const mode = searchParams.get('mode')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const contact = useSelector(state => state.contacts.contacts).find(r => r.id === props.contactId)

    const lastnameRef = useRef()
    const firstnameRef = useRef();
    const emailRef = useRef();
    

    const submitFormHandler = (event) => {

        event.preventDefault();

        if (choice === 'delete') {
            dispatch(deleteRecipeAction(contact.id))
        } else {
            const lastname = lastnameRef.current.value
            const firstname = firstnameRef.current.value
            const email = emailRef.current.value
    
            const contactValues = {
                lastname, 
                firstname,
                email,
                
            }

            console.log(contactValues);
    
            lastnameRef.current.value = ""
            firstnameRef.current.value = ""
            emailRef.current.value = ""
            
            if (choice === 'add') {
                dispatch(addContactAction(contactValues))
            } else if (choice === 'edit') {
                dispatch(editContactAction({...contactValues, id: contact.id}))
            }
        }
        navigate("/contacts")
    }

    return (

    <>
        <form onSubmit={submitFormHandler}>
            <div className="mb-3">
                <label htmlFor="lastname" className="form-label">Nom: </label>
                <input type="text" ref={lastnameRef} required={choice !== 'delete'} disabled={choice === 'delete'} defaultValue={contact?.lastname} className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="firstname" className="form-label">Prénom: </label>
                <input type="text" ref={firstnameRef} required={choice !== 'delete'} disabled={choice === 'delete'} defaultValue={contact?.firstname} className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email: </label>
                <input type="text" ref={emailRef} required={choice !== 'delete'} disabled={choice === 'delete'} defaultValue={contact?.email} className="form-control" />
            </div>
            <div className="text-end">
                <button className={`btn btn-${choice === 'delete'? 'danger' : choice === 'edit' ? 'warning' : 'success'}`}>
                <i className={`bi bi-${choice === 'delete' ? 'trash' : choice === 'edit' ? 'pencil-square' : 'plus-circle'}`}></i> {choice === 'delete' ? 'Confirmer' : choice === 'edit' ? 'Editer' : 'Envoyer'}
                </button>
            </div>
        </form>
    </>
    )
}

export default ContactForm