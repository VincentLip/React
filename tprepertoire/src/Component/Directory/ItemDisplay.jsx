
const ItemDisplay = (props) => {
    const item = props.item

    return (
        <div className="border border-info rounded p-3 my-2">
            <div className="container">
                <div className="row g-2 py-3">
                    <div className="col-4">
                        <img src={item.avatar} className="rounded-circle object-fit-cover" width="150px" height="150px" alt="" />
                    </div>
                    <div className="col-8 ">
                        <div className="d-flex justify-content-between">
                            <h5>{item.lastname} {item.firstname}</h5>
                            <button className="btn btn-outline-warning "><i className="bi bi-pencil-square"></i></button>
                            <button className="btn btn-outline-danger" onClick={() => props.deleteItem(item.id)}><i className="bi bi-trash"></i></button>
                        </div>
                        <hr />
                        <ul>
                            <li>Date de naissance : {item.birthday}</li>
                            <li>Age : {item.age}</li>
                            <li>Email : {item.email}</li>
                            <li>Téléphone : {item.telephone}</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
            // <div className="d-flex justify-content-between align-items-center">
            // </div>
            // <hr />
            // <p></p>
            // <div className="d-flex justify-content-between align-items-center">
    )
}

export default ItemDisplay