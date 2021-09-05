import React from 'react';
import styled from 'styled-components';
import WrapperContent from '../../foundation/WrapperContent';
import Text from '../../foundation/Text';
import Box from '../../foundation/Box';

const CapaWrapper = styled.div`
    position:relative;
    flex:1;
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    align-items:center;
    justify-content:center; 
    overflow:hidden;
    min-height: 100vh;
    img {
        object-fit: cover;
        border-radius: 50%;
        height: 300px;
        width: 300px;
        }    
`;

export default function Capa() {
  return (
    <Box
      flex="1"
      minWidth="100%"
      display="flex"
      flexWwrap="wrap"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      backgroundImage="url(/images/bg.png)"
      backgroundSize="100% auto"
      backgroundRepeat="no-repeat"
      backgroundPosition="center center"
    >
      <Box
        flex="1"
      // display="flex"
        flexWwrap="wrap"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding="0px 16px 140px 16px"
        gap="20px"
        maxWidth="900px"
      >
        <CapaWrapper>
          <WrapperContent>
            <Box
              backgroundColor="transparent"
              display="flex"
              height="100%"
              margin={{
                xs: '25px 0px 95px 0px',
                md: '65px 0px 0px 0px',
              }}
              flex="1"
              alignItems="center"
              maxWidth="900px"
              gap="80px"
              flexDirection={{
                xs: 'column',
                md: 'row',
              }}
              justifyContent={{
                xs: 'flex-start',
                md: 'space-between',
              }}
            >
              <div>
                <Text
                  tag="h1"
                  fontSize={{
                    xs: '44px',
                    md: '66px',
                  }}
                  margin={{
                    xs: '160px 0px 0px 0px',
                    md: '0px',
                  }}
                  fontWeight="100 !important"
                  color="#6ecacb !important"
                >
                  <Text
                    tag="span"
                    fontSize="35px"
                    margin="0"
                    textAlign={{
                      xs: 'center',
                      md: 'left',
                    }}
                    fontWeight="300"
                    display="block"
                    color="#444"
                  >
                    Olá, eu sou
                  </Text>

                  Wallace Barbeiro
                </Text>
                <Text
                  tag="p"
                  fontSize="22px"
                  display="block"
                  textAlign={{
                    xs: 'center',
                    md: 'right',
                  }}
                  margin="10px 0px"
                  color="#444"
                >
                  - Bem-vindo ao meu Portfólio!
                </Text>

              </div>

              <img src="https://github.com/wallacebarbeiro.png" alt="Minha imagem" />
            </Box>
          </WrapperContent>
        </CapaWrapper>
      </Box>
    </Box>
  );
}
