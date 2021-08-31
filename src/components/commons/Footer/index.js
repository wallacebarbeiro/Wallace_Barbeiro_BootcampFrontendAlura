import React from 'react';
import styled from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';
import FooterIcon from './FooterIcon';

const FooterContent = styled.footer`
  position: relative;
  z-index: 1; 
  width:100% ;
  padding: 5px 16px;
  min-height: 40px;
  background-color: #e4168a;
  ${propToStyle('marginTop')}
`;

const FooterContainer = styled.nav`
  max-width: 900px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export default function Footer() {
  return (
    <FooterContent>
      <FooterContainer>
        <FooterIcon />
      </FooterContainer>
    </FooterContent>
  );
}
