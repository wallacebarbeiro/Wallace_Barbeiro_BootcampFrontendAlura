import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import propToStyle from '../../../../theme/utils/propToStyle';

const Image = styled.img`
   ${propToStyle('width')}
   ${propToStyle('minWidth')}
   ${propToStyle('maxWidth')}
   ${propToStyle('height')}
   object-fit: cover;
`;

export default function CardImage({ src, alt, ...props }) {
  return (
    <Image
      src={src}
      alt={alt}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
}

CardImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
