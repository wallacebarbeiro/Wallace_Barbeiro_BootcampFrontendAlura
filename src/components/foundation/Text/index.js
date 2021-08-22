import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import styled, { css } from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';

export const TextStyleVariants = {
  smallestException: css`
      font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.smallestException.fontWeight};
      line-height: ${({ theme }) => theme.typographyVariants.smallestException.lineHeight};
  `,
  paragraph1: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.paragraph1.lineHeight};
`,
};

const TextBase = styled.span` 
  ${({ variant }) => TextStyleVariants[variant]} 
  color: ${(props) => get(props.theme, `colors.${props.color}.color`)};
  ${propToStyle('margin')} 
  ${propToStyle('fontSize')} 
  ${propToStyle('color')}
  ${propToStyle('display')}
  ${propToStyle('maxWidth')}
`;

export default function Text({ tag, children, ...props }) {
  return (
    <TextBase
      as={tag}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
  children: null,
};
