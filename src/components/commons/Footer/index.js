import React from 'react';
import styled from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';
import FooterIcon from './FooterIcon';

const FooterContent = styled.footer`
  position: relative;
  z-index: 1; 
  width:100% ;
  background-color: rgb(51 51 51 / 84%);
  padding: 5px 16px;
  border-top: 5px solid #c100a5;
  min-height: 40px;
  -webkit-box-shadow: 0px -3px 8x -2px rgba(0,0,0,0.67); 
  box-shadow: 0px -3px 8px -2px rgba(0,0,0,0.67);
  ${propToStyle('marginTop')}
`;

const FooterContainer = styled.nav`
  max-width: 900px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export default function Footer() {
  return (
    <FooterContent
      marginTop={{
        xs: '32px',
        md: '52px',
      }}
    >
      <FooterContainer>
        <FooterIcon />
      </FooterContainer>
    </FooterContent>
  );
}
