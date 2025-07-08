import { Component } from "react";

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
  }

  render() {
    return (
      <form className="todo-editor" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add a new todo"
          onChange={this.handleChange}
          value={this.state.textValue}
          required
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}
