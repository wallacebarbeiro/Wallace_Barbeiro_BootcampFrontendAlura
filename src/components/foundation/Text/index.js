import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import styled, { css } from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';
import Link from '../../commons/Link';

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
  ${propToStyle('fontWeight')}
  ${propToStyle('padding')}
  ${propToStyle('textAlign')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('flex')}
  ${propToStyle('alignItems')}
  ${propToStyle('justifyContent')}
  ${propToStyle('textTransform')}
  ${propToStyle('border')}
  ${propToStyle('cursor')}
`;

export default function Text({
  tag, children, href, ...props
}) {
  if (href) {
    return (
      <TextBase
        as={Link}
        href={href}
      // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      >
        {children}
      </TextBase>
    );
  }
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
  href: PropTypes.string,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
  children: null,
  href: '',
};
