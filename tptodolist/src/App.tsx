
import { useState } from 'react';
import './App.css';
import { TodoItem } from './classe/TodoItem';
import TodoForm from './Component/TodoForm';
import TodoList from './Component/TodoList';

function App() {

  const [todoitems, setTodoItems] = useState<TodoItem[]>([])

  const addTodoItem = (todoitem: TodoItem) => {
    setTodoItems([...todoitems, todoitem])
  }
  
console.log(todoitems)
  return (
    <div className="App">
      <TodoForm onAddTodoItem={addTodoItem}></TodoForm>
      {todoitems.map((todo,index) => <TodoList key={index}  test={todo}></TodoList>)}
    </div>
  );
}

export default App;
