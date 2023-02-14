export default function Adresse(props) {

    const {street,city,postCode} = props.adresse;
    return (
        <div>
            <div className="row m-2">
                <div className="col-4">
                Rue : {street}
                </div>
                <div className="col-4">
                Ville : {city}
                </div>
                <div className="col-4">
                Code postal : {postCode}
                </div>
            </div>
        </div>
    )
}