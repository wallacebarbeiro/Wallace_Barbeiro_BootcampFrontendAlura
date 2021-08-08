import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from '../../foundation/Box';
import propToStyle from '../../../theme/utils/propToStyle';

const SeloDestaque = styled.span`
    position: absolute;
    color:#c100a5;
    top:0px;
    left: 0px;
    background-color: #010203;
    border: 2px solid #c100a5;
    text-align:center;
    z-index: 1;
    ${propToStyle('margin')};
    ${propToStyle('fontSize')};
    ${propToStyle('padding')};    
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
      minWidth="100%"
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
