/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import propToStyle from '../../../../theme/utils/propToStyle';

const IconContent = styled.ul`
  display: flex;
  width:auto;
  background-color: #505050;
  padding: 5px 16px;
  height:100%;
  margin:0px;
  border-radius: 18px;
  list-style: none;
  & a {
      color:#00b795;
      margin:10px;
      ${propToStyle('fontSize')}
      & :focus {
        color:#00b795;
      }
      & :hover {
        color:#00b795;
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
        md: '35px',
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
