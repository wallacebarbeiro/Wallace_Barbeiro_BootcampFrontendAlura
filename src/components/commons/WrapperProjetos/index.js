import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';
import Box from '../../foundation/Box';
import Text from '../../foundation/Text';
import BoxButton from '../Button';
import Card from '../Card';

const Section = styled.section`
    ${propToStyle('backgroundColor')}
    position:relative;
    flex:1;
    width: 100%;
    display:flex;
    flex-wrap:wrap;
    ${propToStyle('padding')}
    flex-direction:column;
    align-items:center;
    justify-content:space-between; 
    background-image: url(/images/bg2.png);
    background-size:cover;
    background-position: center center;
`;

const Container = styled.div`
   max-width: 900px;
   padding: 0px 10px;
   margin: 0 auto;
   text-align: center;
`;

export default function WrapperProjetos({ websitePageContext }) {
  return (
    <Section
      backgroundColor="#f0f0f0"
    >
      <Container>
        <Text
          fontSize={{
            xs: '42px',
            md: '58px',
          }}
          textAlign={{
            xs: 'center',
            md: 'left',
          }}
          color="#e4168a"
          fontWeight="100"
        >
          Meus Projetos
        </Text>
        <Card />
        <Box
          backgroundColor="transparent"
          backgroundImage="none"
        >
          <BoxButton
            backgroundColor="#6ecacb"
            color="#fff"
            fontSize="22px"
            border="1px solid white"
            padding="10px"
            marginTop="45px"
            cursor="pointer"
            fontWeight="300"
            marginBottom="55px"
            type="button"
            onClick={() => websitePageContext.toggleModalContato()}
          >
            <span>Entre em contato +</span>
          </BoxButton>
        </Box>
      </Container>
    </Section>
  );
}

WrapperProjetos.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  websitePageContext: PropTypes.object.isRequired,
};
