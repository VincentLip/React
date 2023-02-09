import Adresse from "./Adresse";

export default function Contact(props) {

    const {nom,prenom,telephone} = props.contact;
    return (
        <div className={`${props.contact.statut ? "" : "red"}`}>
            Nom : {nom}, Prénom : {prenom}, Téléphone : {telephone}
            <Adresse adresse={props.contact.adresse}></Adresse>
        </div>
    )
}