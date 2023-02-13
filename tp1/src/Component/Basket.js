export default function Basket(props) {

    const {titre, prix, description} = props.monbasket
    return (
        <>
        <div className="panier">
        <h2>Mon Panier</h2>
        <div>Titre du produit : {titre}</div>
        <div>Prix du produit : {prix}</div>
        <div>Description du produit : {description}</div>
        <button>Retirer du panier</button>
        </div>
        </>
    )
}

