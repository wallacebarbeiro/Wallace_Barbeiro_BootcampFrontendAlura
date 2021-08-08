import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import propToStyle from '../../../../theme/utils/propToStyle';

const LogoImg = styled.a`
    color:#00b795;
    ${propToStyle('fontSize')}
    font-weight: 400;
    background: #505050;
    border-radius: 18px;
    padding: 5px 15px;   
`;

export default function Logo({ href, ...props }) {
  return (
    <LogoImg
      href={href}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {'<Wall/>'}
    </LogoImg>
  );
}

Logo.propTypes = {
  href: PropTypes.string,
};

Logo.defaultProps = {
  href: '#',
};
