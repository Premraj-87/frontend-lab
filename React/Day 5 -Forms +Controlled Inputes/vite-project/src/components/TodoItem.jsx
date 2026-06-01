const TodoItem = ({todo,onDelete,onToggle}) => {

  return (
  <li>
    <input 
    type="checkbox"
    checked={todo.completed}
    onChange={() => onToggle(todo.id)}
    />
    <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
      {todo.title}
    </span>
    <button onClick={() => onDelete(todo.id)}>Delete</button>
  </li>
  )
}
export default TodoItem