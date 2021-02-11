import { createSlice, createSelector } from '@reduxjs/toolkit'

const initialState = {
    todos : {}
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded(state, action) {
      // ✅ This "mutating" code is okay inside of createSlice!
      console.log(action.payload)
      const todo = action.payload
      state.todos[todo.id] = todo
    },
    todoToggled(state, action) {
        const todoId = action.payload
        const todo = state.todos[todoId]
        todo.completed = !todo.completed
    },
    todoDeleted(state, action) {
        delete state.entities[action.payload]
    }
  }
})

export const { todoAdded, todoToggled, todoDeleted } = todosSlice.actions

export default todosSlice.reducer

const selectTodoEntities = (state) => state.todosList.todos

export const selectTodos = createSelector(selectTodoEntities, (entities) =>
  Object.values(entities)
)
