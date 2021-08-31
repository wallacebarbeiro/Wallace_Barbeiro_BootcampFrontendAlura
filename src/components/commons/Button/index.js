import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import propToStyle from '../../../theme/utils/propToStyle';

const Button = styled.button`
  background: transparent;
  ${propToStyle('backgroundColor')}
  ${propToStyle('color')}
  ${propToStyle('fontSize')}
  ${propToStyle('border')}
  ${propToStyle('padding')}
  ${propToStyle('marginTop')}
  ${propToStyle('cursor')}
  ${propToStyle('fontWeight')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('width')}
  ${propToStyle('textTransform')}
  ${propToStyle('marginLeft')}
  ${propToStyle('marginBottom')}
  ${propToStyle('borderRadius')}
  :disabled {
      opacity: 0.6;
  }
`;

export default function BoxButton({ children, ...props }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Button {...props}>
      {children}
    </Button>
  );
}

BoxButton.propTypes = {
  children: PropTypes.node.isRequired,
};
