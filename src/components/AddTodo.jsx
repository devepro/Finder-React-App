import React, {useState} from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import {todoAdded} from './todosSlice'


const AddTodo = (props) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const dispatch = useDispatch()
    const [count, setCount] = useState(0);

    const onChangeHandler = (e,type)=> {
        if(type==="title"){
            setTitle(e.target.value)
        }else{
            setDescription(e.target.value)
        }
    }

    const formSubmitHandler = (e) => {
        e.preventDefault()
        var today = new Date();
        var date = (today.getMonth()+1)+'\\'+today.getDate()+'\\'+today.getFullYear();
        setCount(count+1)
        dispatch(todoAdded(
            {   
                id: count,
                title : title,
                description :  description,
                completed : false,
                targetTime : date
            }
        )) 
        setTitle("")
        setDescription("")
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <InputTitle placeholder="Title" onChange={(event) => onChangeHandler(event,"title")}  type="text" id="fname" name="fname" value={title}/><br/>
            <InputDescription placeholder="Description" onChange={(event) => onChangeHandler(event,"desc")} type="text" id="lname" name="lname" value={description}/><br/>
            <Button type="submit" value="Submit">Add</Button>
        </form> 
    )
}

const InputTitle = styled.input`
    padding : 5px;
    margin: 10px;
    width : 50%;
    max-width: 500px;
`

const InputDescription = styled.textarea`
    padding : 5px;
    margin: 10px;
    width : 50%;
    height: 30px;
    max-width: 500px;
`

const Button = styled.button`
    padding : 10px;
    background-color : cream;
    color: black;
    border-style: none;
    border-radius: 5px;
`
export default AddTodo