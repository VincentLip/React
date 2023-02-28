import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { signInAction, signUpAction } from "./authSlice";

const SignForm = (props) => {

    const dispatch = useDispatch()
    const [signFormMode, setSignFormMode] = useState("")
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const mode = searchParams.get('mode')

const submitFormHandler = (event) => {
    event.preventDefault()

    const email = emailRef.current.value
    const password = passwordRef.current.value

    const credentials = {
        email,
        password,
        returnSecureToken: true
    }

    emailRef.current.value = ""
    passwordRef.current.value = ""

    
    if (mode === 'signin') {
        dispatch(signInAction(credentials))
    } else {
        dispatch(signUpAction(credentials))
    }
    navigate(`/`)
}

return (
    <form onSubmit={submitFormHandler}>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email: </label>
            <input type="email" id="email" required ref={emailRef} className="form-control" />
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password: </label>
            <input type="password" id="password" required ref={passwordRef} className="form-control" />
        </div>
        <div className="text-end">
            <button className={`btn btn-${mode === 'Sign In' ? 'primary' : 'secondary'}`}>{mode}</button>
        </div>
    </form>
    )
}

export default SignForm