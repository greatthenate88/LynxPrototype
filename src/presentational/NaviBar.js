import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import lynx from './lynx.png'

const Nav = styled.nav`
  width:100%;
  height: 4rem;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 25px;
  display: flex;
  background-image: linear-gradient(45deg, whitesmoke, #009fa8);
  font-weight:bold;
  color:#006bbf;
  justify-content: space-between;
  .logo {
    padding: 10px 0;
    transition:transform .25s;
}
.logo:hover{
  transform: scale(1.2);
}
`;
const LynxLogo = styled.a`

`;

const Navibar = () => {
  return (
    <Nav>
      <div className="logo">
        <LynxLogo href='/'>
        <img src={lynx} alt="temp lynx logo" height='69px' width='69px'/>
        </LynxLogo>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navibar