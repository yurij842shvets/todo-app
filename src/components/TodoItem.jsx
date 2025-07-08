import React from "react";

export default class TodoItem extends React.Component {
  render() {
    const {id, text, completed, onToggleCompleted} = this.props
    return (
      <div>
        <input type="checkbox" checked={completed} onChange={() => onToggleCompleted(id)}/>
        <span>{text}</span>
        <button className="delete-button">Delete</button>
      </div>
    );
  }
}
