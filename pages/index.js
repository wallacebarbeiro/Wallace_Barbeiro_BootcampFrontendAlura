import React from 'react';
import Cabecalho from '../src/components/commons/Cabecalho';
import Capa from '../src/components/commons/Capa';
import SectionTitle from '../src/components/commons/SectionTitle';
import WrapperProjetos from '../src/components/commons/WrapperProjetos';
import Card from '../src/components/commons/Card';
import Box from '../src/components/foundation/Box';
import Text from '../src/components/foundation/Text';
import WrapperContent from '../src/components/foundation/WrapperContent';
import Footer from '../src/components/commons/Footer';
import Modal from '../src/components/commons/Modal';
import FormCadastro from '../src/components/patterns/FormCadastro';
import BoxButton from '../src/components/commons/Button';

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
      <Capa>
        <WrapperContent>
          <section>
            <Text
              tag="h1"
              fontSize={{
                xs: '64px',
                md: '90px',
              }}
              margin="0px"
            >
              Wallace Barbeiro
            </Text>
            <Text
              tag="h2"
              fontSize="48px"
              margin="0"
            >
              Portfólio
            </Text>
          </section>
          <Cabecalho />
        </WrapperContent>
      </Capa>

      <WrapperProjetos.Section
        padding={{
          xs: '0px 27px',
          md: '0px 10px',
        }}
      >
        <WrapperProjetos.Container>
          <SectionTitle>
            Meus Projetos
          </SectionTitle>
          <Card />
          <Box
            backgroundColor="transparent"
            backgroundImage="none"
          >
            <BoxButton
              color="#fff"
              fontSize="22px"
              border="1px solid white"
              padding="10px"
              marginTop="45px"
              cursor="pointer"
              fontWeight="300"
              type="button"
              onClick={() => setModalState(!isModalOpen)}
            >
              <span>Entre em contato +</span>
            </BoxButton>
          </Box>
          <Text
            tag="a"
            href="https://www.svgrepo.com/"
            fontSize="14px"
            color="#fff"
            margin="45px 0px 0px 0px"
            display="inline-block"
          >
            Ícones por svgrepo.com
          </Text>

        </WrapperProjetos.Container>
      </WrapperProjetos.Section>
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
          // <Box
          //   backgroundColor="transparent"
          //   backgroundImage="none"

          //   // eslint-disable-next-line react/jsx-props-no-spreading
          //   {...propsDoModal}
          // >
          //   <p>Nosso modal aqui</p>
          // </Box>
        )}
      </Modal>
    </Box>
  );
}
