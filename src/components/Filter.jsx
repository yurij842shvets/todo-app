import React from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 40px`

const FilterLabel = styled.label`
  margin-right: 10px;`

export default class Filter extends React.Component {
  handleChange = (e) => {
    this.props.onFilterChange(e.target.value);
  };

  render() {
    return (
      <FilterContainer>
        <FilterLabel>Фільтр по імені</FilterLabel>
        <input
          type="text"
          id="filter"
          value={this.props.value}
          onChange={this.handleChange}
        />
      </FilterContainer>
    );
  }
}