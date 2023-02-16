import { FormEvent, MutableRefObject, useRef } from "react"
import { TodoItem } from "../classe/TodoItem"


interface Props {
    onAddTodoItem: (todoitem: TodoItem) => void
}

const TodoForm = (props: Props) => {


const titleRef = useRef() as MutableRefObject<HTMLInputElement>
const descRef = useRef() as MutableRefObject<HTMLTextAreaElement>
const dateRef = useRef() as MutableRefObject<HTMLInputElement>


const submitFormHandler = (event: FormEvent<HTMLFormElement>) => {

    event.preventDefault()
    const newTodoItem: TodoItem = {
        title: titleRef.current.value,
        description: descRef.current.value,
        dueDate: dateRef.current.value,
        isDone:false,
        
    }

    props.onAddTodoItem(newTodoItem)
    console.log(newTodoItem)

}

return (
    <>
        <div className="row">
        <form onSubmit={submitFormHandler}>
            <div className="col-md-5 offset-md-2 rounded bg-dark text-white p-3 my-3">
                <h5 className="display-5">Todo Form</h5>
                <hr />
                    <div className="text-start m-2">
                        <label htmlFor="todoTitle" >Title :</label>
                        <input type="text" className="w-100" ref={titleRef} placeholder="" />
                    </div>
                    <div className="text-start m-2">
                        <label htmlFor="todoDesc" >Description :</label>
                        <textarea name="todoDesc" className="w-100" ref={descRef} cols={30} rows={8}></textarea>
                    </div>
                    <div className="text-start m-2">
                        <label htmlFor="todoDesc" >DueDate :</label>
                        <input type="date" className="w-100" ref={dateRef}/>
                    </div>
                <div className="text-end">
                    <button className="btn btn-outline-light"> Submit</button>
                </div>
            </div>
        </form>
        </div>
        
    </>
    )
}

export default TodoForm