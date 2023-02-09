import { Component } from "react";
import Contact from "./Contact";
import './Liste.css'

export class Liste extends Component  {
    constructor(props){
        super(props)
        this.state = {
            contact : [
                { nom : "nom1", prenom : "prenom1" , telephone:"0123456789" ,statut : false , adresse : { rue:"marue1", ville:"maville1",cp:"12345"}},
                { nom : "nom2", prenom : "prenom2" , telephone:"9876543210" ,statut : true , adresse : { rue:"marue2", ville:"maville2",cp:"67894"}},
                { nom : "nom3", prenom : "prenom3" , telephone:"1111111111" ,statut : false , adresse : { rue:"marue3", ville:"maville3",cp:"54987"}}
                
            ]
        }
    }

    render(){
        
        return (
            <div>
                {this.state.contact.map((m,i) => (<Contact key={i} contact={m}></Contact>))}    
            </div>
        )
    }
}

