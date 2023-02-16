import { TodoItem } from "../classe/TodoItem"

interface Props {

    test :TodoItem
}


const TodoList = (props: Props) => {

    return (
        <>
            {props.test.description}
            {props.test.title}
            {props.test.dueDate}
            {props.test.isDone}
        </>
    )
}

export default TodoList