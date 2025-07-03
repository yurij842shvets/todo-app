import { Component } from "react";

export default class TodoEditor extends Component {
  state = {
    textValue: "",
  };



  handleChange = () => {
    e.preventDefault();
    this.setState({textValue: e.target.value})
  }

  handleSubmit = e => {
    const { textValue } = this.state;
  }

  render() {
    return (
      <form className="todo-editor" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Add a new todo" onChange={this.handleChange} value={this.state.textValue}/>
        <button className="add-button">Add</button>
      </form>
    );
  }
}
