import React from "react";

export default class Filter extends React.Component {
  handleChange = (e) => {
    console.log("Hello from Filter");
    this.props.onFilterChange(e.target.value);
  };

  render() {
    return (
      <div>
        <label>Search todo</label>
        <input
          type="text"
          id="filter"
          value={this.props.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}