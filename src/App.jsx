import "./App.css";
import TodoList from "./components/TodoList.jsx";
import initialTodos from "./todo.json";
import { Component } from "react";
import TodoEditor from "./components/TodoEditor.jsx";
import Filter from "./components/Filter.jsx";

export default class App extends Component {
  state = {
    todos: initialTodos,
    filter: "",
  };

  addTodo = (text) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };
    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
    }));
  };

  onToggleCompleted = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };
  onDelete = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };

  handleFilter = (value) => {
    this.setState({ filter: value });
  };

  getFilteredTodos = () => {
    const { todos, filter } = this.state;
    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(filter.toLowerCase())
    );
  };
  render() {
    return (
      <>
        <TodoEditor onSubmit={this.addTodo} />
        <TodoList
          todos={this.state.todos}
          onToggleCompleted={this.onToggleCompleted}
          onDelete={this.onDelete}
        />

        <Filter onFilterChange={this.handleFilter} value={this.state.filter} />
      </>
    );
  }
}
