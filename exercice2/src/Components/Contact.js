import Adresse from "./Adresse";

export default function Contact(props) {

    
    const {nom,prenom,telephone,statut,adresse} = props.contact;
    return (
        <div >
            Nom : {nom}, Prénom : {prenom}, Téléphone : {telephone}
            <Adresse adresse={props.contact.adresse}></Adresse>
            <span className={statut ? 'green' : 'red'}>Statut : {statut ? 'actif' : 'non actif'}</span>
            <button onClick={changeStatut}>Change Statut</button>
        </div>
    )
    
    
}
