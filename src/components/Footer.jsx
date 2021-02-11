import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <Foot>
           <hr/> 
           <small>Made with love by Devepro </small>
        </Foot>
    )
}

const Foot = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
`

export default Footer