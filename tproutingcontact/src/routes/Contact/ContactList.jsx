
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ContactDisplay from './ContactDisplay';

const ContactListPage = (props) => {

    const contacts = useSelector(state => state.contacts.contacts)
    const navigate = useNavigate()
    
    const add = () =>{
        
            navigate("/contacts/add")

    }

    return (
    <>  
        <h3>Contact List</h3>
        <button className='btn btn-success' onClick={add}><i className='bi bi-plus'></i>Add</button>
        <hr />
        {contacts.length === 0 ? 
            <p>Il n'y a pas de tâches dans la base de données !</p> :
            contacts.map((contact,i) => <ContactDisplay key={i} contact={contact} />)}
    </>
    )
    
}

export default ContactListPage