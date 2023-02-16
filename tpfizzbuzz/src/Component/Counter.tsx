import { useState } from "react"
import './Counter.css';

interface Props {
    
}


const Counter = (props: Props) => {

    const [myCount, setMyCount] = useState<number> (0)

    const addCount = () => {
        setMyCount(myCount+1)
    }

    const subCount= () => {
        setMyCount(myCount-1)
    }


    return(
        <>
        <div className="container m-3">
            <div className="row">
                <div className="col-md-6 offset-md-3 bg-dark text-white rounded p-3">
                    <h2>Exo Compteur</h2>
                    <hr />
                    <div className="counter">
                        <div className="count display-4">
                            <span>{((myCount % 15 === 0 && myCount != 0) ? <span className="text-danger">FizzBuzz</span> 
                            :(myCount % 3 === 0  && myCount != 0) ? <span className="text-warning">Fizz</span>  
                            :(myCount % 5 === 0  && myCount != 0) ? <span className="text-success">Buzz</span>  
                            :myCount)}</span>
                        </div>
                        <div className="divbouton">
                            <button className="btn btn-primary bouton" disabled={myCount==0} onClick={subCount}>-</button>
                            <button className="btn btn-primary bouton" onClick={addCount}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Counter