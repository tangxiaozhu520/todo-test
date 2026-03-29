import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addTodo } from '../store/todoSlice'

function TodoInput() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return
    dispatch(addTodo(trimmed))
    setText('')
  }

  return (
    <form className="todo-input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="添加新的待办事项..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">添加</button>
    </form>
  )
}

export default TodoInput
