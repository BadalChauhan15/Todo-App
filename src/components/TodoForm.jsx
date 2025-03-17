import "../styles/TodoForm.css";

function TodoForm({ handleChange, addTodo, inputValue }) {
  
    return (
        <form className="todo__form">
            <input 
                type="text" 
                placeholder="Add task..."
                value={inputValue} 
                onChange={ handleChange }
            />
            <button 
                onClick={ addTodo }>
                    Add
            </button>
        </form>
    );

};

export default TodoForm;