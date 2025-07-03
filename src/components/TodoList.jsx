import { Component } from "react";

export default class TodoList extends Component {
  render() {
    const { todos } = this.props;
    return (
      <div className="todo-list">
        {todos.map(({ id, text, completed }) => (
          <div key={id} className={`todo-item ${completed ? "completed" : ""}`}>
            <input type="checkbox" checked={completed}  />
            <span>{text}</span>
            <button className="delete-button">Delete</button>
          </div>
        ))}
      </div>
    );
  }
}