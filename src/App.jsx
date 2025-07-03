import "./App.css";
import TodoList from "./components/TodoList.jsx";
import initialTodos from "./todo.json";
import { Component } from "react";
import TodoEditor from "./components/TodoEditor.jsx";

class App extends Component {
  state = {
    todos: initialTodos,
    filter: "",
  };
  render() {
    return (
      <>
        <TodoEditor/>
        <TodoList todos={this.state.todos} />
      </>
    );
  }
}

export default App;