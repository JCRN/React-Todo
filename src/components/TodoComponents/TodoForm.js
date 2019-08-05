import React from 'react'

const TodoForm = props => {
  return (
    <form onSubmit={props.submitTask}>
      <input
        type="text"
        value={props.task}
        name="task"
        onChange={props.handleChanges}
      />
      <button onClick={props.submitTask}>Add Todo</button>
      <button onClick={props.clearCompleted}>Clear Completed</button>
    </form>
  )
}

export default TodoForm
