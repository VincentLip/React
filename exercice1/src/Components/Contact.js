import { Component } from "react"
import Adresse from "./Adresse"

export class Contact extends Component {
    constructor(props){
        super(props)
        this.state = {
            contact : { nom : "nom1", prenom : "prenom1" , telephone:"0123456789" , adresse : { rue:"marue", ville:"maville",cp:"12345"}}
        }
    }

    render(){
        return (
            <>
                Nom : {this.state.contact.nom}, Prénom : {this.state.contact.prenom}, Téléphone : {this.state.contact.telephone}
                <Adresse adresse={this.state.contact.adresse}></Adresse>
            </>
        )
    }
}

