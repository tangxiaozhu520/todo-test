import { useSelector, useDispatch } from 'react-redux'

import { setFilter, clearCompleted } from '../store/todoSlice'

function TodoFooter() {
  const dispatch = useDispatch()
  const { list, filter } = useSelector((state) => state.todos)

  const activeCount = list.filter((t) => !t.completed).length
  const hasCompleted = list.some((t) => t.completed)

  if (list.length === 0) return null

  return (
    <div className="todo-footer">
      <span className="todo-count">{activeCount} 项待完成</span>
      <div className="filter-buttons">
        {['all', 'active', 'completed'].map((f) => (
          <button
            key={f}
            className={filter === f ? 'active' : ''}
            onClick={() => dispatch(setFilter(f))}
          >
            {{ all: '全部', active: '进行中', completed: '已完成' }[f]}
          </button>
        ))}
      </div>
      {hasCompleted && (
        <button
          className="btn-clear"
          onClick={() => dispatch(clearCompleted())}
        >
          清除已完成
        </button>
      )}
    </div>
  )
}

export default TodoFooter
