import { useSelector } from "react-redux"

const FlashcardDisplay = (props) => {
    
    
    console.log(props.flashcardid)
    const flashcard = useSelector(state => state.flashcards.flashcards).find(f => f.id === props.flashcardid)
    return (
        <div className="m-3 rounded border border-info p-3">
          <div className="d-flex align-items center">
            <h5>{flashcard.question} </h5>
           </div>
          <hr />
          {flashcard.answer}
        </div>
      )


}

export default FlashcardDisplay