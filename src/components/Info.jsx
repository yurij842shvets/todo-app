import React from "react";
import styles from 'styled-components'

const InfoContainer = styles.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;`

export default class Info extends React.Component {
  render() {
      const {todosInfo} = this.props
      const allTodos = todosInfo.length
      const completedTodos = todosInfo.filter((todo) => todo.completed).length

    return (
      <>
        <InfoContainer>
          <p>Всього завдань: {allTodos}</p>
          <p>Виконано: {completedTodos}</p>
        </InfoContainer>
      </>
    );
  }
}