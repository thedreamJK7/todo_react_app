import React,{useState} from "react";
const Form = (props) => {
  const [text, setText] = useState("");
  const inputTodoHandler = (event) => {
    setText(event.target.value);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.inform(text);
    setText("");
  }
  
  return (
    <form onSubmit={formSubmitHandler}>
      <input value={text} onChange={inputTodoHandler} type="text" className="todo-input" />
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
