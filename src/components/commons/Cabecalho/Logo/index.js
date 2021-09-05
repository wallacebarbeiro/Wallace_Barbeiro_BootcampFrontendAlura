import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import propToStyle from '../../../../theme/utils/propToStyle';
import Text from '../../../foundation/Text';

const LogoImg = styled.div`
  a{
    ${propToStyle('color')}
    ${propToStyle('fontSize')}
    font-weight: 400; 
    border:5px solid #6ecacb; 
    display:inline-block;
    min-height: 45px;
  }    
`;

export default function Logo({ href, ...props }) {
  return (
    <LogoImg
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <Text
        variant=""
        href={href}
      >
        <Text
          variant=""
          display="inline-block"
          padding="5px"
          backgroundColor="#6ecacb"
          tag="span"
        >
          {'<WALL />'}
        </Text>
        <Text
          variant=""
          padding="5px"
          tag="span"
          display={{
            xs: 'none',
            md: 'inline-block',
          }}
        >
          {' // DEV FRONT-END'}
        </Text>
      </Text>
    </LogoImg>
  );
}

Logo.propTypes = {
  href: PropTypes.string,
};

Logo.defaultProps = {
  href: '#',
};
