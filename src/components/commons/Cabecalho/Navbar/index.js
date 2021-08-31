import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import PropTypes from 'prop-types';
import propToStyle from '../../../../theme/utils/propToStyle';

const NavList = styled.ul`    
    display: flex;
    flex-wrap: wrap;
    gap:32px;
    align-items: center;
    margin:0px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: auto;
    padding: 5px 16px;
    margin: 0px;
    right: 0px;
    list-style: none;
    background-color: #6ecacb;
    height: 95px;
    position: absolute;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    bottom: auto;
    top: -10px;
    & a {
        color: #fff;
        font-weight: 300;
        ${propToStyle('textTransform')}
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
