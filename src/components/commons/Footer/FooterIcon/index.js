/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/self-closing-comp */
import React from 'react';
// eslint-disable-next-line import/no-unresolved
import Link from 'next/link';
import styled from 'styled-components';
import propToStyle from '../../../../theme/utils/propToStyle';

const IconContent = styled.ul`
  display: flex;
  width:auto;
  padding: 5px 16px;
  height:100%;
  margin:0px;
  list-style: none;
  background-color: #6ecacb;
  height: 66px;
  position: absolute;
  justify-content: center;
  align-items: center;
  bottom: 0px;
  & a {
      color:#444;
      margin:10px;
      ${propToStyle('fontSize')}
      transition: color .3s ease-in-out;
      & :focus {
        color:#fff;
      }
      & :hover {
        color:#fff;
      }
  }
`;

const social = {
  instagram: 'https://www.instagram.com/wallbarbeiro/',
  linkedin: 'https://www.linkedin.com/in/wallacebarbeiro/',
  gitHub: 'https://github.com/wallacebarbeiro',
};

export default function FooterIcon() {
  return (
    <IconContent
      fontSize={{
        xs: '25px',
        md: '25px',
      }}
    >
      <li>
        <Link href={social.instagram}>
          <a><i className="fab fa-instagram"></i></a>
        </Link>
      </li>
      <li>
        <Link href={social.linkedin}>
          <a><i className="fab fa-linkedin-in"></i></a>
        </Link>
      </li>
      <li>
        <Link href={social.gitHub}>
          <a><i className="fab fa-github"></i></a>
        </Link>
      </li>

    </IconContent>
  );
}
