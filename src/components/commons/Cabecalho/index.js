import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Navbar from './Navbar';

const Header = styled.header`
  position: relative;
  z-index: 1; 
  width:100% ;
  background-color: rgb(51 51 51 / 84%);
  padding: 0px 16px;
  border-top: 5px solid #c100a5;
  min-height: 40px;
  -webkit-box-shadow: 0px -3px 8x -2px rgba(0,0,0,0.67); 
  box-shadow: 0px -3px 8px -2px rgba(0,0,0,0.67);
`;

const NavContainer = styled.nav`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export default function Cabecalho() {
  return (
    <Header>
      <NavContainer>
        <Logo
          fontSize={{
            xs: '18px',
            md: '38px',
          }}
        />
        <Navbar
          fontSize={{
            xs: '18px',
            md: '28px',
          }}
          links={{ Sobre: '/sobre', Contato: '/contato' }}
        />
      </NavContainer>
    </Header>
  );
}
