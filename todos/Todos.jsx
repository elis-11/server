import { useContext, useState } from "react";
import { Add } from "./Add";
import { List } from "./List";
import { Search } from "./Search";
// import todosData from "../../data/todos.json"
import { Context } from "../context/DataContext";
import "./Todos.scss";


export const Todos = () => {
  const [todos, setTodos] = useContext(Context);
  const [search, setSearch] = useState("");

  const addTodo = (newTodo) => {
    const addNewTodo = {
      _id: Date.now().toString(),
      ...newTodo,
    };
    setTodos([...todos, addNewTodo]);
  };

  const handleDelete = (id) => {
    const deleteTodo = todos.filter((todo) => todo._id !== id);
    setTodos(deleteTodo);
  };
  const filteredTodos = todos.filter(
    (todo) =>
      todo.todo.toLowerCase().includes(search.toLowerCase()) ||
      todo.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="Todos">
      <h2>
        {filteredTodos.length} List{" "}
        {filteredTodos.length === 1 ? "Todo ✨" : "Todos ✨"}
      </h2>
      <div className="container">
        <Add addTodo={addTodo} />
        <Search search={search} setSearch={setSearch} />
        <List handleDelete={handleDelete} todos={filteredTodos} />
      </div>
    </div>
  );
};
