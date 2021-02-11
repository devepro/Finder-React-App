import { configureStore } from '@reduxjs/toolkit'

import todosReducer from './components/todosSlice'

const store = configureStore({
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
    todosList: todosReducer,
  },
})

export default store