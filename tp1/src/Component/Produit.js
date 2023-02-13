import { Component } from 'react';
import Basket from './Basket';


export class Produit extends Component {

    constructor(props){
        super(props)

    }

    clickView = () => {

        this.props.clickAdd(this.props.monproduit.id)

    }

    render() {
        const {titre, prix, description,basket} = this.props.monproduit;
            return(
                <>
                <div className="magasin">
                    <div>Titre du produit : {titre}</div>
                    <div>Prix du produit : {prix}</div>
                    <div>Description du produit : {description}</div>
                    <button onClick={this.clickView}>Ajouter au panier</button>
                </div>
                <div className='panier'>

                {this.props.monproduit.basket.map((basket,i) => <Basket key={i} monbasket={basket}></Basket>)}
                </div>
                </>
            )
    }
}