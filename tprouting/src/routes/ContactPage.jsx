import { useRef} from 'react';


const ContactPage = () => {
    
    const emailRef = useRef();
    const messageRef = useRef();
    const selectRef = useRef();

    
    
    const send =() =>{
        
        const email = emailRef.current.value
        const message = messageRef.current.value
        const select = selectRef.current.value

        const contact = {

            email,
            select,
            message
        }

        console.log(contact)
        
    }
    
    return (
    <>
        <h3>Contact Me</h3>
        <hr />
        <div className="mb-3">
            <label className="form-label">Your email</label>
            <div className="">
                <input type="text" className="form-control" ref={emailRef} />
            </div>
        </div>
        <div className="mb-3">
            <label className="form-label">Subject</label>
            <div className="">
            <select className="form-select" ref={selectRef} >
                <option value="0">Select an option</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            </div>
        </div>
        <div className="mb-3">
            <label className="form-label">Message</label>
            <div className="">
            <textarea name="" id="" cols="30" rows="10" className="w-100" ref={messageRef}></textarea>
            </div>
        </div>
        <div className="text-end">
            <button className="btn btn-outline-light" onClick={send}><i className="bi bi-send"></i> Send </button>
        </div>
    </>
    )
}

export default ContactPage