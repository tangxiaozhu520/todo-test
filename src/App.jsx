import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'
import './App.css'

function App() {
  return (
    <div className="app">
      <h1>📝 Todo List</h1>
      <div className="todo-container">
        <TodoInput />
        <TodoList />
        <TodoFooter />
      </div>
    </div>
  )
}

export default App
