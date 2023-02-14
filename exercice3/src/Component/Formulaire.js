import { Component } from "react";

export class Formulaire extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contact: {
                id : "",
                lastName: "",
                firstName: "",
                phone :"",
                status : true,
                address : {
                    street : "",
                    postCode:  "",
                    city: ""
                } 
            }
        }
    }


    submitForm = (e) => {
        //envoyer un objet qui posséde un prenom et un nom
        e.preventDefault();
      //  console.log("coucou")
        const monContactValid = {...this.state.contact}
        console.log(monContactValid);
        this.props.addContact(monContactValid)
        this.setState({ contact : {lastName : "", firstName :"",phone : "",street:"",postCode:"",city:""}})
        e.target.reset();
    }

    fieldsOnChangeContact = (e) => {
        // console.log("e.target.name : ", e.target.name)
        // console.log("e.target.getAttribute('name') : ", e.target.getAttribute("name"))
        const tmpContact = {...this.state.contact}
        const tmpAdresse = {...this.state.contact.address}
        tmpContact[e.target.getAttribute("name")] = e.target.value
        tmpAdresse[e.target.getAttribute("name")] = e.target.value
        this.setState({contact : {...tmpContact, address :{...tmpAdresse}}})
    }

    
    render() {

        return (
            <>
                <h1>Ajout de Contact</h1>
                <form onSubmit={this.submitForm} className="bg-dark p-2 m-2 rounded text-light">
                    <div>
                        <label className="m-2">Votre nom :</label>
                        <input type="text" onChange={this.fieldsOnChangeContact} name="lastName"></input>
                    </div>
                    <div>
                        <label className="m-2">Votre prénom :</label>
                        <input type="text" onChange={this.fieldsOnChangeContact} name="firstName"></input>
                    </div>
                    <div>
                        <label className="m-2">Votre n° telephone :</label>
                        <input type="text" onChange={this.fieldsOnChangeContact} name="phone"></input>
                    </div>
                    <h4>Adresse</h4>
                    <div>
                        <label className="m-2">Votre rue :</label>
                        <input type="text" onChange={this.fieldsOnChangeContact} name="street"></input>
                    </div>
                    <div>
                        <label className="m-2">Votre code postal :</label>
                        <input type="text" onChange={this.fieldsOnChangeContact} name="postCode"></input>
                    </div>
                    <div>
                        <label className="m-2">Votre ville :</label>
                        <input type="text" onChange={this.fieldsOnChangeContact} name="city"></input>
                    </div>
                    <button className="btn btn-outline-success">Envoyer</button>
                </form>
            </>
        )
    }
}