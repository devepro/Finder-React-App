import React from 'react'
import styled from 'styled-components'


const Header = () => {
    return (
        <Nav>
        <NavHeader>
            <NavLeft>Just Do It</NavLeft>
    
            <NavCenter>
                To-do List
            </NavCenter>
    
            <NavRight>
                <MenuLink>
                    
                </MenuLink>
                <MenuLink >
                    
                </MenuLink>

            </NavRight>
      </NavHeader>
    </Nav>
    )
}


const Nav = styled.div`
  background-color: #d3f083;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  width: auto;
  color: #0c4900;
`;
 
const NavHeader = styled.div`
  padding: 10px 10px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;
 
const NavLeft = styled.div`
  width: 33.333%;
  text-align: left;
  font-weight: bold;
`;
 
const NavCenter = styled.div`
  width: 33.333%;
  text-align: center;
`;

const NavRight = styled.div`
  width: 33.333%;
  text-align: center;
  display: inline-flex;
  align-items: flex-end;
  justify-content: flex-end;
`;
const MenuLink = styled.div`
    padding: 5px;
`;

export default Header