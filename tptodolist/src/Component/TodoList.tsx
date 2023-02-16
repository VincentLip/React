import { TodoItem } from "../classe/TodoItem"

interface Props {

    test :TodoItem
}


const TodoList = (props: Props) => {

    return (
        <>
            {props.test}
        </>
    )
}

export default TodoList