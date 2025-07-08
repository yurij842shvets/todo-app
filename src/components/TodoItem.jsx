import React from "react";

export default class TodoItem extends React.Component {
  render() {
    const {id, text, completed, onToggleCompleted, onDelete} = this.props
    return (
      <div>
        <input type="checkbox" checked={completed} onChange={() => onToggleCompleted(id)}/>
        <span>{text}</span>
        <button className="delete-button" onClick={() => onDelete(id)}>Delete</button>
      </div>
    );
  }
}
