import "../styles/TodoList.css";

function TodoList({ todos, deleteTodo, moveTodoUp, moveTodoDown }) {
  return (
    <ol className="order__list">
      {todos.map((todo, todoIndex) => {
        return (
                <li key={ todoIndex } className="list__container">
                  <span className="list__items">{todoIndex + 1} - {todo}</span>
                  <button className="btn__delete" onClick={() => {
                    deleteTodo(todoIndex);
                  }}>Delete</button>
                  <button className="btn__move" onClick={() => {
                    moveTodoUp(todoIndex);
                  }}>Up</button>
                  <button className="btn__move" onClick={() => {
                    moveTodoDown(todoIndex);
                  }}>Down</button>
                </li>
        );
      })}
    </ol>
  );
}

export default TodoList;
