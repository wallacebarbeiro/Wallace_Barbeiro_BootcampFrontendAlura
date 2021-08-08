import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import propToStyle from '../../../../theme/utils/propToStyle';

const Title = styled.h3`
    color: #00b795;
    font-weight: 700;
    letter-spacing: 2px;
    ${propToStyle('fontSize')}
    ${propToStyle('display')}
    ${propToStyle('textAlign')}
    ${propToStyle('width')}
    ${propToStyle('padding')}
    ${propToStyle('margin')}`;

export default function CardTitle({ children, ...props }) {
  return (
    <Title
      fontSize={{
        xs: '24px',
        md: '32px',
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </Title>
  );
}

CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
};
