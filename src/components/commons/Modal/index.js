import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle, css } from 'styled-components';
import { motion } from 'framer-motion';
import Box from '../../foundation/Box';
import propToStyle from '../../../theme/utils/propToStyle';

const ModalWrapper = styled.div`
  position:relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  background: rgba(0,0,0,0.9);
  position: fixed;
  top:0;
  left:0;
  right:0;
  bottom: 0;
  margin: auto;
  overflow: hidden;
  z-index: 100;
  transition: all.3s;

  .box-motion {
    position:absolute;
    bottom:0px;
    border-top-left-radius:5px;
    border-top-right-radius:5px;
    padding: 10px 15px;
    background-color: rgb(19 19 19);
    -webkit-box-shadow: 0px 0px 11px 0px #010203, 6px 5px 0px 2px #00b795;
    box-shadow: 0px 0px 11px 0px #010203, 6px 5px 0px 2px #00b795; 

    ${propToStyle('minWidth')}
  }

  ${({ isOpen }) => {
    if (isOpen) {
      return css`
      opacity: 1;
      pointer-events: all;
      `;
    }
    return css`
    opacity: 0;
    pointer-events: none;
    `;
  }}

`;

const LockScroll = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

function Modal({ isOpen, onClose, children }) {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClick={(event) => {
        const isSafeArea = event.target.closest('[data-modal-safe-area="true"]');
        if (!isSafeArea) {
          onClose();
        }
      }}
      minWidth={{
        xs: '95%',
        md: '700px',
      }}
    >
      {isOpen && <LockScroll />}
      <motion.div
        className="box-motion"
        variants={{
          open: {
            y: '0%',
          },
          closed: {
            y: '300%',
          },
        }}
        animate={isOpen ? 'open' : 'closed'}
        transition={{
          duration: 0.5,
        }}
      >
        <Box
          backgroundColor="transparent"
          backgroundImage="none"
        >
          {children({
            'data-modal-safe-area': 'true',
          })}

        </Box>
      </motion.div>
    </ModalWrapper>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
