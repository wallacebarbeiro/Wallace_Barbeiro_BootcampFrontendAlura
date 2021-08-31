import React from 'react';
import Capa from '../src/components/commons/Capa';
import WrapperProjetos from '../src/components/commons/WrapperProjetos';
import Box from '../src/components/foundation/Box';
import Footer from '../src/components/commons/Footer';
import Modal from '../src/components/commons/Modal';
import FormCadastro from '../src/components/patterns/FormCadastro';

export default function Home() {
  const [isModalOpen, setModalState] = React.useState(false);

  return (
    <Box
      flex="1"
      display="flex"
      flexWwrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Capa />
      <WrapperProjetos isModalOpen={isModalOpen} setModalState={setModalState} />
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
  );
}
