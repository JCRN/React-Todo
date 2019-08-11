import React from 'react'

import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

import './components/TodoComponents/Todo.css'

const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      tasks: tasks,
      task: ''
    }
  }

  toggleTask = id => {
    console.log(id)
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          }
        } else {
          return task
        }
      })
    })
  }

  addTodo = todoTask => {
    const newTask = {
      task: todoTask,
      id: Date.now(),
      completed: false
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  clearCompleted = () => {
    this.setState({
      tasks: this.state.tasks.filter(task => !task.completed),
      task: ''
    })
  }

  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitTask = event => {
    event.preventDefault()
    this.addTodo(this.state.task)
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Welcome to your Todo App!</h2>
          <TodoList tasks={this.state.tasks} toggleTask={this.toggleTask} />
        </div>
        <TodoForm
          addTodo={this.addTodo}
          clearCompleted={this.clearCompleted}
          handleChanges={this.handleChanges}
          submitTask={this.submitTask}
        />
      </div>
    )
  }
}

export default App
