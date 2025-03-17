import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoTitle from "./components/TodoTitle";

function App() {
  
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
      setInputValue(e.target.value);
  };

  const addTodo = (e) => {
      e.preventDefault();
      if (inputValue.trim() !== "") {
        setTodos([...todos,inputValue]);
        setInputValue("");
      }
  };

  const deleteTodo = (index) => {
      let newTodos = todos.filter((_, todoIndex) =>  todoIndex !== index)
      setTodos(newTodos);
  };

  const moveTodoUp = (index) => {
      if (index > 0) {
        const updatedTodos = [...todos];
        [updatedTodos[index], updatedTodos[index - 1]] = [updatedTodos[index - 1], updatedTodos[index]];
        setTodos(updatedTodos);
      }
  };

  const moveTodoDown = (index) => {
      if (index < todos.length - 1) {
        const updatedTodos = [...todos];
        [updatedTodos[index], updatedTodos[index + 1]] = [updatedTodos[index + 1], updatedTodos[index]];
        setTodos(updatedTodos);
      }
  };

  return (
    <>
      <TodoTitle />
      <TodoForm handleChange={ handleChange } addTodo={ addTodo } inputValue={ inputValue } />
      <TodoList todos={ todos } deleteTodo={ deleteTodo } moveTodoUp={ moveTodoUp } moveTodoDown={ moveTodoDown } />
    </>
  );
};

export default App
