import { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const { todos, onToggleCompleted, onDelete} = this.props;
    return (
      <div className="todo-list">
        {todos.map(({ id, text, completed }) => (
          <TodoItem key={id} id={id} text={text} completed={completed} onToggleCompleted={onToggleCompleted} onDelete={onDelete}/>
        ))}
      </div>
    );
  }
}