import React from 'react'
import styled from 'styled-components'
import AddTodo from './AddTodo'
import TodoItem from './TodoItem'
import {useSelector} from 'react-redux'
import {selectTodos} from './todosSlice'

const ListTodosComponent = () => {
        
        const todos = useSelector(selectTodos)
        return (
            <>
            <AddTodo/>
            {todos.length!==0 && <TodoWrapper>
                { todos.map( todo =>  <TodoItem {...todo} key = {todo.id}/> )}
            </TodoWrapper>}
            </>
        )
            
}

const TodoWrapper = styled.ul`
    background : white;
    border: 1px solid silver;
    color: black;
    margin: 10 1em;
    padding: 0.25em 1em;
    
`

export default ListTodosComponent
