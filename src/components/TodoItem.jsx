import React from "react";
import styled from "styled-components";

const TodoItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid #000;
  padding: 10px;
  margin-bottom: 15px;
  `
const TodoItemButton = styled.button`
  background-color: #f44336;
  color: #fff;
  `

  

export default class TodoItem extends React.Component {
  render() {
    const {id, text, completed, onToggleCompleted, onDelete} = this.props
    return (
      <TodoItemContainer>
        <input type="checkbox" checked={completed} onChange={() => onToggleCompleted(id)}/>
        <span style={{ textDecoration: completed ? "line-through" : "none" }}>{text}</span>
        <TodoItemButton className="delete-button" onClick={() => onDelete(id)}>Delete</TodoItemButton>
      </TodoItemContainer>
    );
  }
}
