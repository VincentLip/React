export default function Basket(props) {

    const {titre, prix, description} = props.tmpproduit
    return (
        <div className="magasin">
        <div>Titre du produit : {titre}</div>
        <div>Prix du produit : {prix}</div>
        <div>Description du produit : {description}</div>
        <button onClick={this.clickView}>Ajouter au panier</button>
    </div>
    )
}

