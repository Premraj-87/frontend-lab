import { useState } from "react";
import { filterTodos } from "../utils/filterTodos";

const useTodos = () => {

    const[todos, setTodos] = useState([]);
    const[search, setSearch] = useState("");
    const[filter, setFilter] = useState("all");

    const addTodo = (title)=>{
        const newTodo ={
            id: Date.now(),
            title,
            completed: false,
        };
        setTodos([...todos, newTodo]);
        }

    //delete todo
    const deleteTodo =(id)=>{
        setTodos(todos.filter((todo)=> todo.id !== id));
    }

    //toggle completed
    const toggleCompleted =(id)=>{
        setTodos(
            todos.map((todo)=>
            todo.id === id ? {...todo, completed: !todo.completed} : todo
            )
        );
    }
//filtered todos
    const filteredTodos = filterTodos(todos, search, filter);
    return {
        todos,
        search,
        filter,
        setSearch,
        setFilter,
        addTodo,
        deleteTodo,
        toggleCompleted,
        filteredTodos


  }
}
export default useTodos