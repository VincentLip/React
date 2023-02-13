import { Component } from 'react';
import { Produit } from './Produit';
import './Magasin.css';
import Basket from './Basket';

export class Magasin extends Component {

    constructor(props){
        super(props)
        this.state = { produits : [{ 
            id : 0,
            titre: "Produit 1", 
            prix : 20,
            description: "Description produit 1",
            basket : []
            
        },
        { 
            id : 1,
            titre: "Produit 2", 
            prix : 30,
            description: "Description produit 2",
            basket : []
        },
        { 
            id : 2,
            titre: "Produit 3", 
            prix : 40,
            description: "Description produit 3",
            basket : []
        }]}
    }

    clickAdd = (id) => {

        // const tmpProduit = this.state.produits[id]
        // console.log(tmpProduit)
        const tmpProduit = [...this.state.produits];
        const basket = [];
        tmpProduit.forEach(p => {
            if(p.id == id){
                
                p.basket.push(p)
            
                console.log(basket)
            }
            this.setState({ produits : [...tmpProduit],basket})
        })
        console.log(this.state.produits)
    }

    render() {
        return (
            <>
            <h2>TP 1</h2>
            <div>
                {this.state.produits.map((produit,i) => <Produit key={i} clickAdd={this.clickAdd} monproduit={produit}></Produit>)}
            </div>
            </>
        )
    }
}