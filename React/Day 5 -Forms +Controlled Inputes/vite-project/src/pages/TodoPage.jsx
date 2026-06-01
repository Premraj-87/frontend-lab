import useTodos from "../hooks/useTodos";
import TodoForm from "../components/TodoForm";
import SearchBar from "../components/SearchBar";
import FilterButtons from "../components/FilterButtons";
import TodoList from "../components/TodoList";

const TodoPage = () => {

  const {
    search,
    filter,

    setSearch,
    setFilter,

    addTodo,
    deleteTodo,
    toggleCompleted,

    filteredTodos,
  } = useTodos();

  return (
    <div>

      <h1>Todo App</h1>

      <TodoForm
        onAddTodo={addTodo}
      />

      <SearchBar
        search={search}
        onSearchChange={setSearch}
      />

      <FilterButtons
        filter={filter}
        onFilterChange={setFilter}
      />

      <TodoList
        todos={filteredTodos}
        onDelete={deleteTodo}
        onToggle={toggleCompleted}
      />

    </div>
  );
};

export default TodoPage;