import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from '../../foundation/Box';
import propToStyle from '../../../theme/utils/propToStyle';

const SeloDestaque = styled.span`
    position: absolute;
    color: #f0f0f0;
    background-color: #e4168a;
    text-align: center;
    z-index: 1;
    ${propToStyle('margin')};
    ${propToStyle('fontSize')};
    ${propToStyle('fontWeight')}; 
    ${propToStyle('padding')};
    ${propToStyle('top')};
    ${propToStyle('left')};      
`;

export const CardDestaqueContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap:wrap;
    gap:30px;
    ${propToStyle('flex')};
    ${propToStyle('minWidth')};
`;

export default function CardDestaque({ children }) {
  return (
    <Box
      minWidth="100%"
      position="relative"
      flex="1"
      display="flex"
      flexWwrap="wrap"
      flexDirection={{
        xs: 'column',
        md: 'row',
      }}
      justifyContent="space-between"
      order={{
        xs: '0',
        md: '1',
      }}
      maxWidth="100%"
      flexBase="1"
      background="none"
      backgroundColor="transparent"
    >
      <SeloDestaque
        margin={{
          xs: '4px',
          md: '12px',
        }}
        fontSize={{
          xs: '24px',
          md: '38px',
        }}
        padding={{
          xs: '5px 28px',
          md: '5px 42px',
        }}
        top={{
          xs: '10px',
          md: '0px',
        }}
        left={{
          xs: '10px',
          md: '0px',
        }}
        fontWeight="100"
      >
        Destaque
      </SeloDestaque>
      {children}

    </Box>
  );
}

CardDestaque.propTypes = {
  children: PropTypes.node.isRequired,
};
