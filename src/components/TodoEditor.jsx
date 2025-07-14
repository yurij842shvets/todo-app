import { Component } from "react";
import styled from "styled-components";

const TodoEditorContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid #000;
  border-radius: 5px;
  width: 450px;
  height: 140px;
  padding: 10px;
`;

const TodoInput = styled.input`
  height: 50px;
  margin-bottom: 10px;
`;
const TodoButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  width: 50%;
  &:hover {
    background-color: #4034efff;
  }
`;

export default class TodoEditor extends Component {
  state = {
    textValue: "",
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ textValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { textValue } = this.state;
    this.props.onSubmit(textValue);
    this.setState({ textValue: "" });
  };

  render() {
    return (
      <TodoEditorContainer onSubmit={this.handleSubmit}>
        <TodoInput
          type="text"
          placeholder="Add a new todo"
          onChange={this.handleChange}
          value={this.state.textValue}
          required
        />
        <TodoButton>Add</TodoButton>
      </TodoEditorContainer>
    );
  }
}
