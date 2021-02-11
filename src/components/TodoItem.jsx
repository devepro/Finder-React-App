import React, {useState} from 'react'
import styled from 'styled-components'
import Checkbox from './Checkbox'
import {todoToggled} from './todosSlice'
import {useDispatch} from 'react-redux'

const TodoItem = ({id,title,description,targetTime,completed}) => {
    
    const dispatch = useDispatch();
    const handleCheckboxChange = () =>{
        dispatch(todoToggled(id))
    }
    return (
        <ListItem >
            <ItemLeft>
                <Checkbox
                    value={completed}
                    checked={completed}
                    onChange={() => handleCheckboxChange()}
                />
            </ItemLeft>
            
            <ItemCenter>
                <Title>
                    {title}
                </Title>
                <SubTitle>
                    {description}
                </SubTitle>
            </ItemCenter>
            <ItemRight>
                <span>
                    {targetTime}
                </span>
            </ItemRight>
        </ListItem>
    )
}


 
const ListItem = styled.li`
    display : inline-flex;
    width: 100%;
`

const Title = styled.div`
    font-size: large;
`

const SubTitle = styled.div`
    font-size: small;
`

const ItemLeft = styled.div`
  width: 10%;
  align-items: flex-start;
  justify-content: flex-start;
`;
 
const ItemCenter = styled.div`
  width: 60%;
  text-align: left;
`;

const ItemRight = styled.div`
  width: 30%;
  text-align: center;
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
`

export default TodoItem