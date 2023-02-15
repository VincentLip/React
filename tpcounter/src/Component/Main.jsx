import { useRef, useState } from "react";
import Counter from "./Counter";

const Main = (props)=> {

    const myValueRef = useRef()
    const [myTable,setMyTable]=useState([])
    

    const submitCounter = (event) => {
        event.preventDefault();
        setMyTable((previousState) => [...previousState,myValueRef.current.value]);

    }

    const deleteACounter = (counterId) =>{

        setMyTable([...myTable.slice(0,counterId),...myTable.slice(counterId +1)])
    }

return(
    <>
    <div className="container bg-dark text-light rounded p-2 w-50">
        <h2>MainComponent</h2>
        <hr />
        <form onSubmit={submitCounter}>
        <div className="m-2">
            <label htmlFor="Startvalue">Start value : </label>
            <input className="rounded w-100" type="number" ref={myValueRef}/>
        </div>
        <div>
            <button className="btn btn-outline-light">Add a counter</button>
        </div>
        </form>
        <div>
            <h4>Counters</h4>
            <hr />
            {
                myTable.length == 0 ? <div>Please add a counter</div>
                :
                (
                    <>
                    {myTable.map((v,i) => <Counter key={i} value={+v} deleteCounter={()=> deleteACounter(i)}></Counter>)}
                    </>
                )
            }
        </div>
    </div>
    </>
)
}

export default Main

