/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../../commons/Footer';
import Modal from '../../commons/Modal';
import SEO from '../../commons/SEO';
import Box from '../../foundation/Box';
import WrapperContent from '../../foundation/WrapperContent';
import FormCadastro from '../../patterns/FormCadastro';
import Cabecalho from '../../commons/Cabecalho';

export const WebsitePageContext = React.createContext({
  toggleModalContato: () => {},
});

export default function WebsitePageWrapper({
  children,
  seoProps,
  pageBoxProps,
  menuProps,
}) {
  const [isModalOpen, setModalState] = React.useState(false);
  return (
    <WebsitePageContext.Provider
      value={{
        toggleModalContato: () => {
          setModalState(!isModalOpen);
        },
      }}
    >
      <SEO {...seoProps} />
      <Box
        flex="1"
        display="flex"
        flexWwrap="wrap"
        flexDirection="column"
        justifyContent="space-between"
        {...pageBoxProps}
      >
        <WrapperContent>
          { menuProps.display && (
            <Cabecalho isModalOpen={isModalOpen} setModalState={setModalState} />
          )}
          {children}
        </WrapperContent>
        <Footer />
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setModalState(false);
          }}
        >
          {(propsDoModal) => (
            <FormCadastro
              propsDoModal={propsDoModal}
              setModalState={setModalState}
            />
          )}
        </Modal>
      </Box>
    </WebsitePageContext.Provider>

  );
}

WebsitePageWrapper.defaultProps = {
  seoProps: {},
  pageBoxProps: {},
  menuProps: {
    display: true,
  },
};

WebsitePageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  pageBoxProps: PropTypes.shape({
    flexWrap: PropTypes.string,
    justifyContent: PropTypes.string,
    backgroundImage: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    // eslint-disable-next-line react/forbid-prop-types
    backgroundPosition: PropTypes.object,
  }),
  children: PropTypes.node.isRequired,
};
