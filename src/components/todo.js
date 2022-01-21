import React from "react";

const Todo = (props) => {
  const date = props.date;
  const deleteHandler = (event) => {
    props.delete(date[event].id);
  };
  const completeHandler = (event) => {
    props.todo(date[event].id);
  } 
  console.log(date);
  return (
    <>
      {date.map((item, index) => (
        <div className="todo">
          <li className={`todo-item ${date[index].completed ? "completed": ""}`} key={item.id}>
            {item.todo}
          </li>
          <button className="complete-btn" onClick={() => completeHandler(index)}>
            <i className="fas fa-check"></i>
          </button>
          <button onClick={() => deleteHandler(index)} className="trash-btn">
            <i className="fas fa-trash"></i>
          </button>
        </div>
      ))}
    </>
  );
};

export default Todo;
