import { useSelector } from 'react-redux'

import TodoItem from './TodoItem'

function TodoList() {
  const { list, filter } = useSelector((state) => state.todos)

  const filteredList = list.filter((todo) => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  if (filteredList.length === 0) {
    return <p className="empty-tip">暂无待办事项</p>
  }

  return (
    <ul className="todo-list">
      {filteredList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList
