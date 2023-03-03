import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const HomePage = () => {

    const flashcardsList = useSelector(state => state.flashcards.flashcards)
    return (
    <>
        <h3>Flashcards</h3>
        <hr />
        <p>
        Les Flashcards ou cartes mémoire sont de petites fiches de révision qui te permettent d'apprendre rapidement et efficacement un grand nombre d'informations courtes.
        Le principe est simple : sur chaque flashcard tu écris une question ou un mot au recto, sa réponse ou sa définition au verso. Ensuite, tu apprends les cartes les unes après les autres sous forme de quizz. Tu en maîtrises une ? c'est gagné! Alors apprends-la moins souvent, voire plus du tout.</p>
        <hr/>
        <div>
            {flashcardsList.map((a,i) => <Link to={`/Question/${i+1}`} key={i} flashcardId={a.id}>Flashcard n{i+1} </Link>)}
        </div>
    </>
    )

}

export default HomePage