import React from "react";
import Todo from "./todo";

const TodoList = (props) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        <Todo date={props.date} delete={props.delete} todo={props.trueTodo}/>
      </ul>
    </div>
  );
};

export default TodoList;
