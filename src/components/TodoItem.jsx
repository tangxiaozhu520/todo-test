import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { toggleTodo, removeTodo, editTodo } from '../store/todoSlice'

function TodoItem({ todo }) {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)

  const handleSave = () => {
    const trimmed = editText.trim()
    if (trimmed) {
      dispatch(editTodo({ id: todo.id, text: trimmed }))
      setIsEditing(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave()
    } else if (e.key === 'Escape') {
      setEditText(todo.text)
      setIsEditing(false)
    }
  }

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <div className="edit-wrapper">
          <input
            className="edit-input"
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleSave}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        </div>
      ) : (
        <>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
          <span className="todo-text" onDoubleClick={() => setIsEditing(true)}>
            {todo.text}
          </span>
          <div className="todo-actions">
            <button className="btn-edit" onClick={() => setIsEditing(true)}>
              编辑
            </button>
            <button
              className="btn-delete"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              删除
            </button>
          </div>
        </>
      )}
    </li>
  )
}

export default TodoItem
