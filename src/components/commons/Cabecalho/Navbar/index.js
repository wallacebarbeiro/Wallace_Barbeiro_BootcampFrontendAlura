import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import PropTypes from 'prop-types';
import propToStyle from '../../../../theme/utils/propToStyle';

const NavList = styled.ul`
    list-style: none;
    padding-left: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap:32px;
    align-items: center;
    & a {
        color: #fff;
        font-weight: 300;
        ${propToStyle('fontSize')}
    }
`;

export default function Navbar({ links, ...props }) {
  const linksKeys = Object.keys(links);
  return (
    <NavList
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {linksKeys.map((link) => (
        <li key={link}>
          {' '}
          <Link href={links[link]}>
            <a href={links[link]}>{link}</a>
          </Link>
        </li>
      ))}
    </NavList>
  );
}

Navbar.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  links: PropTypes.object.isRequired,
};
