import "./App.css";
import { useState } from "react";

// Import files
import Form from "./components/form";
import TodoList from "./components/todoList";

function App(props) {
  const [inputText, setInputText] = useState([]);
  const addTodo = (event) => {
    setInputText([
      ...inputText,
      {
        id: Math.random().toString(),
        todo: event,
        completed: false,
      },
    ]);
  };
  const Delete = (props) => {
    setInputText(inputText.filter((el) => el.id !== props));
  };
  const CompleteTodo = (props) => {
    setInputText(
      inputText.map(item => {
        if(item.id === props) {
          return {
            ...item, completed: !item.completed
          }
        } else {
          return item;
        }
      })
    )
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Javohir's Todo List!!</h1>
      </header>
      <Form inform={addTodo} />
      <TodoList date={inputText} delete={Delete} trueTodo={CompleteTodo} />
    </div>
  );
}

export default App;
