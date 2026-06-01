import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  onDelete,
  onToggle,
}) => {

  if (todos.length === 0) {
    return <p>No todos found</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
};

export default TodoList;