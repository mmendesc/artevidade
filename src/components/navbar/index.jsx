import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  z-index: 1;
  overflow: hidden;
  background-color: #000;
`

const Ul = styled.ul`
  list-style-type: none;
  color: #FFF;
`

const Li = styled.li`
  display: inline;
  margin-right: 24px;
  text-align: left;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 24px;
  color: #FFF;
`

const Divider = styled.div`
  border: solid 1px #AAA;
  margin-left: 16px
`

const Navbar = () => {
  return (
    <Div className="navbar">
      <Logo>
        Artevidade
      </Logo>
      <Divider />
      <Ul>
        <Li>Categorias</Li>
        <Li>Random</Li>
      </Ul>
    </Div>
  )
}

export default Navbar;