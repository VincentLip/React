export default function Adresse(props) {

    const {street,city,postCode} = props.adresse;
    return (
        <div>
            Rue : {street}, Ville : {city}, Code postal : {postCode}
        </div>
    )
}