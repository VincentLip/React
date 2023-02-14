import Adresse from "./Adresse";

export default function Contact(props) {

    
    const {firstName,lastName,phone,status} = props.contact;
    return (
        <div >
            Nom : {lastName}, Prénom : {firstName}, Téléphone : {phone}, Status : {status}
            <Adresse adresse={props.contact.address}></Adresse>
        </div>
    )
    
    
}