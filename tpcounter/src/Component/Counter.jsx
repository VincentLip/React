import { useEffect, useState } from "react"

const Counter = (props) => {

const [myCount,setMyCount] = useState(props.value)
    
useEffect(() => {
    
    const id = setInterval(() => {
        setMyCount(myCount+1)
    },1000)

    return () =>  clearInterval(id)
},[myCount,props.value])
    

    return(
        <>
            <div className="border rounded row">
                <div className="col-5">
                    {myCount}
                </div>
                <div className="col-5">
                    <button className="btn btn-danger" onClick={props.deleteCounter}>Delete</button>
                </div>
            </div>
        </>

    )

}

export default Counter