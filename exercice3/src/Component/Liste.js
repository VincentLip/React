import { Component } from "react"
import Contact from "./Contact";
import { getInfoContact } from "./Data"
import { Formulaire } from "./Formulaire";

export class Liste extends Component {
    constructor(props){
        super(props)
        this.state = {
            contact : []
        }
    }

    componentDidMount(){

        getInfoContact().then(res => {
            // console.log(res.data)
            // this.setState({ contact : res})
            const tmpContact = res.data
            console.log(tmpContact)
            this.setState({contact : [...tmpContact]})
        })

    }
    changeStatutClientByName = (id) => {
        
        const tmpContact = [...this.state.contact]
        tmpContact.forEach(c => {
            if(c.id == id){
                c.status = !c.status
            }
        })
        this.setState({ contact : [...tmpContact]})
    }

    addContact = (c) => {

        c.id = this.state.contact.length
        this.setState({contact : [...this.state.contact,c]})
    }



    render(){
        return (
            <div>
                {
                    this.state.contact.length == 0 ? <div>En cours de chargement ....</div>
                    :
                    (<div>
                        {this.state.contact.map((c,i) => (<Contact key={i} contact={c} changeStatutClientByName={this.changeStatutClientByName}></Contact>))}
                    </div>)
                }
                <Formulaire addContact={this.addContact}></Formulaire>
            </div>
        )
    }
}

// {this.state.contact.map((c,i) => (<Contact key={i} contact={c}></Contact>))}