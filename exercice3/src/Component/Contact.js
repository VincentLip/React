import Adresse from "./Adresse";


export default function Contact(props) {

    const clickStatut = (e) => {
        e.preventDefault()
        props.changeStatutClientByName(props.contact.id)
        console.log(props.contact.id)
    }


    const {firstName,lastName,phone,status} = props.contact;
    return (
        <div  className="container bg-dark text-light rounded m-2 text-center">
            <div className="row m-2">
                <div className="col-6">
                Nom : {lastName}
                </div>
                <div className="col-6">
                Prénom : {firstName}
                </div>
            </div>
            <div className="row m-2">
                <div className="col-6">
                Téléphone : {phone}
                </div>
                <div className={status ? 'text-success col-6' : 'text-danger col-6'} >
                Status : {status ? 'actif' : 'non actif'}
                </div>
            </div>
            <Adresse adresse={props.contact.address}></Adresse>
            <button className="btn btn-outline-success m-2" onClick={clickStatut} data-name={lastName}>Changer Statut</button>
        </div>
    )
    
    
}