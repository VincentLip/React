import { useRef } from "react"

const DirectoryItem = (props) => {

    const lastnameRef = useRef()
    const firstnameRef = useRef()
    const birthdayRef = useRef()
    const ageRef = useRef()
    const emailRef = useRef()
    const telephoneRef = useRef()
    const avatarRef=useRef()

    const submitFormHandler = (event) => {
    event.preventDefault()

    const lastname = lastnameRef.current.value
    const firstname = firstnameRef.current.value
    const birthday = birthdayRef.current.value
    const age = ageRef.current.value
    const email = emailRef.current.value
    const telephone = telephoneRef.current.value
    const avatar = avatarRef.current.value


    const newItem = {
        lastname,
        firstname,
        birthday,
        age,
        email,
        telephone,
        avatar
    }

    lastnameRef.current.value = ""
    firstnameRef.current.value= ""
    birthdayRef.current.value= ""
    ageRef.current.value= ""
    emailRef.current.value= ""
    telephoneRef.current.value= ""
    avatarRef.current.value= ""

    props.addItem(newItem)
    

}

    return (
        <>
            <div className="bg-dark text-light rounded p-3">
            <h3>TodoForm</h3>
            <hr />
            <form onSubmit={submitFormHandler}>
            <div className="mb-3">
                <label htmlFor="lastname" className="form-label">Nom: </label>
                <input type="text" required id="lastname" ref={lastnameRef} className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="firstname" className="form-label">Prénom: </label>
                <input type="text" required id="firstname" ref={firstnameRef} className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="birthday" className="form-label">Date de naissance: </label>
                <input type="date" required id="birthday" ref={birthdayRef} className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">Age: </label>
                <input type="number" required id="age" ref={ageRef} className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email: </label>
                <input type="text" required id="email" ref={emailRef} className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="telephone" className="form-label">Téléphone: </label>
                <input type="text" required id="telephone" ref={telephoneRef} className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="avatar" className="form-label">Photo: </label>
                <input type="text" required id="avatar" ref={avatarRef} className="form-control" />
            </div>
            <div className="text-end">
                <button className="btn btn-outline-light"><i className="bi bi-send"></i> Valider</button>
            </div>
            </form>
            </div>
        </>
        )

}

export default DirectoryItem