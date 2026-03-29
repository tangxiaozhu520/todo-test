import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    list: [],
    filter: 'all' // all | completed | active
  },
  reducers: {
    addTodo(state, action) {
      state.list.push({
        id: Date.now(),
        text: action.payload,
        completed: false
      })
    },
    toggleTodo(state, action) {
      const todo = state.list.find((item) => item.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    removeTodo(state, action) {
      state.list = state.list.filter((item) => item.id !== action.payload)
    },
    editTodo(state, action) {
      const { id, text } = action.payload
      const todo = state.list.find((item) => item.id === id)
      if (todo) {
        todo.text = text
      }
    },
    clearCompleted(state) {
      state.list = state.list.filter((item) => !item.completed)
    },
    setFilter(state, action) {
      state.filter = action.payload
    }
  }
})

export const {
  addTodo,
  toggleTodo,
  removeTodo,
  editTodo,
  clearCompleted,
  setFilter
} = todoSlice.actions
export default todoSlice.reducer
