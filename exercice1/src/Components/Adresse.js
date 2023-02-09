// import { Component } from "react";

// export class Adresse extends Component {
//     constructor(props){
//         super(props)
//     }

//     render(){
//         const {rue,ville,cp} =this.props.adresse;
//         return (
//             <div>
//                 Rue : {rue}, Ville : {ville}, Code postal : {cp}
//             </div>
//         )
//     }
// }

export default function Adresse(props) {

    const {rue,ville,cp} = props.adresse;
    return (
        <div>
            Rue : {rue}, Ville : {ville}, Code postal : {cp}
        </div>
    )
}