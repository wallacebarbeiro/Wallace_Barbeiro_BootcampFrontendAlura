import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';

const Title = styled.h2`
    position: relative;
    text-align: center;
    color: #fff;
    display: inline-block;
    ${propToStyle('fontSize')}
    text-align:center;
    margin-bottom: 70px;
    font-weight: 400;
    &::before {
    position: absolute;
    bottom: -12px;
    right: 0px;
    content: "";
    width: 40%;
    height: 6px;
    background-color: #c100a5;
    display: block;
    -webkit-box-shadow:0px 20px 0px 0px #00b795;
    box-shadow: 0px 20px 0px 0px #00b795;
    }
    &::after {
        position: absolute;
        bottom: -23px;
        right: 0px;
        content: "";
        width: 30%;
        height: 6px;
        background-color: #3e3a3b;
        display: block;
    }
`;

export default function SectionTitle({ children }) {
  return (
    <Title
      fontSize={{
        xs: '36px',
        md: '60px',
      }}
    >
      {children}
    </Title>
  );
}

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
};
