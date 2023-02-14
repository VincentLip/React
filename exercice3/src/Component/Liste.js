import { Component } from "react"
import Contact from "./Contact";
import { getInfoContact } from "./Data"

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
    changeStatutClientByName = (lastname) => {
        
        const tmpContact = [...this.state.contact]
        tmpContact.forEach(c => {
            if(c.lastName == lastname){
                c.statut = !c.statut
            }
        })
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
            </div>
        )
    }
}

// {this.state.contact.map((c,i) => (<Contact key={i} contact={c}></Contact>))}