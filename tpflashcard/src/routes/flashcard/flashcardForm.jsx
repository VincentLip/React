import { useRef } from "react"
import { useDispatch } from "react-redux"
import { addFlashcardAction } from "./flashcardSlice"

const FlashcardForm = () => {

    
    const questionRef = useRef()
    const answerRef = useRef()
    const dispatch = useDispatch()

    const submitFormHandler =(e)=>{
        e.preventDefault()

        const question = questionRef.current.value
        const answer = answerRef.current.value



        const newQuestion ={
            question,
            answer
        }
        dispatch(addFlashcardAction(newQuestion))
        console.log(newQuestion)
    }


    return (

        <>
        <h3>Ajout d'une Flashcard</h3>
        <hr />
        <form onSubmit={submitFormHandler}>
        <div className="mb-3">
            <label htmlFor="question" className="form-label">Question: </label>
            <input type="text" id="question" className="form-control" ref={questionRef} />
        </div>
        <div className="mb-3">
            <label htmlFor="answer" className="form-label">Réponse : </label>
            <textarea className="w-100 rounded" name="" id="" cols="30" rows="3" ref={answerRef} ></textarea>
        </div>
        <div className="text-start">
            <button className=""><i className=""></i>Test</button>
        </div>
        </form>

        </>
    )
}

export default FlashcardForm