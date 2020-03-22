import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
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

const Logo = styled(Div)`
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