import React from 'react'

class TodoForm extends React.Component {
  constructor() {
    super()
    this.state = {
      task: ''
    }
  }

  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitTask = event => {
    event.preventDefault()
    this.props.addTodo(this.state.task)
  }

  render() {
    return (
      <form onSubmit={this.submitTask}>
        <input
          type="text"
          value={this.task}
          name="task"
          onChange={this.handleChanges}
        />
        <button>Add Todo</button>
        <button className="clear-btn" onClick={this.props.clearCompleted}>
          Clear Completed
        </button>
      </form>
    )
  }
}

export default TodoForm
