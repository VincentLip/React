import { useState } from "react"

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
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 bg-dark text-white rounded p-3">
                    <h2>Exo Compteur</h2>
                    <hr />
                    <div>
                        <span>{((myCount % 15 === 0 && myCount != 0) ? <span className="text-danger">FizzBuzz</span> 
                        :(myCount % 3 === 0  && myCount != 0) ? <span className="text-warning">Fizz</span>  
                        :(myCount % 5 === 0  && myCount != 0) ? <span className="text-success">Buzz</span>  
                        :myCount)}</span>
                    </div>
                    <div>
                        <button className="btn btn-primary rounded-circle" disabled={myCount==0} onClick={subCount}>-</button>
                        <button className="btn btn-primary rounded-circle" onClick={addCount}>+</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    
    
    )

}
    
    


export default Counter