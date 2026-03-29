import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'
import './App.css'

function App() {
  return (
    <div className="app">
      <h1>📝 Todo List</h1>
      <p>请天天开心哦 </p>
      <div className="todo-container">
        <TodoInput />
        <TodoList />
        <TodoFooter />
      </div>
      <p>天天开心😄</p>
    </div>
  )
}

export default App
