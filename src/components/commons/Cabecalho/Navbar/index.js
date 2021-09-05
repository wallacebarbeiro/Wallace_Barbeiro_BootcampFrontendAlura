import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import propToStyle from '../../../../theme/utils/propToStyle';
import Text from '../../../foundation/Text';

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

export default function Navbar({
  links,
  ...props
}) {
  return (
    <NavList
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {links.map((link) => {
        if (link.texto !== 'home') {
          return (
            <li key={link.texto}>
              <Text href={link.url}>
                {link.texto}
              </Text>
            </li>
          );
        }
        // if (link.texto === 'contato') {
        //   return (
        //     <li key={link.texto}>
        //       <Text
        //         padding="0px"
        //         cursor="pointer"
        //         backgroundColor="transparent"
        //         border="0px"
        //         fontSize="16px"
        //         fontWeight="300"
        //         textTransform="uppercase"
        //         color="white"
        //         tag="button"
        //         // onClick={setModalState(!isModalOpen)}
        //       >
        //         {link.texto}
        //       </Text>
        //     </li>
        //   );
        // }
        return false;
      })}
    </NavList>
  );
}

Navbar.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  links: PropTypes.array.isRequired,
};
