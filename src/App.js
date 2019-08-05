import React from 'react'
import TodoList from './components/TodoComponents/TodoList'

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
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      tasks
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to your Todo App!</h2>
        </div>
        <TodoList
          tasks={this.state.tasks}
          clearCompleted={null}
          toggleTask={null}
        />
      </div>
    )
  }
}

export default App
