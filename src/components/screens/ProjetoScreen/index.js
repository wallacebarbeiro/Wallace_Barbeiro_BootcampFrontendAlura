/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from '../../foundation/Box';
import Grid from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';

const WrapperProjeto = styled.div`
    .gloweffect img{
        transition: box-shadow .3s ease-in-out;
    }
    &:hover .gloweffect img{
        box-shadow: -16px -15px 0px 0px #6ecacb, 15px 20px 0px 2px #e4168a;
    }
`;

const BoxImagem = styled.div`
    margin-top:15vh;
    margin-bottom:-100px;
    text-align:center;
    position: relative;
    z-index: 1;
    img {
        object-fit: cover;
        border-radius: 50%;
        height: 200px;
        width: 200px;
    } 
    
`;

export default function Projeto({ projectInfo }) {
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
        display="flex"
        flexWwrap="wrap"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding="0px 16px 140px 16px"
        gap="20px"
        maxWidth="900px"
      >

        <WrapperProjeto>
          <Box
            className="gloweffect"
          >
            <Grid.Container>
              <Grid.Row
                justifyContent="center"
              >
                <Grid.Col
                  value={{ xs: 12, md: 12 }}
                  flex={1}
                >
                  <BoxImagem>
                    <img src={projectInfo.image} alt="Minha imagem" />
                  </BoxImagem>
                </Grid.Col>
              </Grid.Row>
            </Grid.Container>
            <Box
              margin="0px 0px 140px 0px"
              boxShadow="0px 0px 0px 1px #444, 2px 2px 0px 1px #f0f0f0, 4px 4px 0px 1px #444"
            />
            <Grid.Container>
              <Grid.Row
                justifyContent="center"
              >
                <Grid.Col
                  value={{ xs: 12, md: 12 }}
                  flex={1}
                >
                  <Text
                    variant=""
                    color="#444"
                    tag="h1"
                    textAlign="center"
                    fontWeight="300"
                  >
                    {projectInfo.title}
                  </Text>
                </Grid.Col>
                <Grid.Col
                  value={{ xs: 12, md: 12 }}
                  flex={1}
                >
                  <Text
                    tag="p"
                    margin="0px 0px 40px 0px"
                    color="#444"
                    fontWeight="300"
                    textAlign="justify"
                  >
                    {projectInfo.description}
                  </Text>

                </Grid.Col>
                <Grid.Col
                  value={{ xs: 12, md: 4 }}
                  flex={1}
                >

                  <Box
                    backgroundColor="white"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    color="#444"
                    flex="1 1 30%"
                    font-weight="400"
                    border="5px solid #6ecacb"
                  >

                    <Text
                      color="white"
                      display="inline-block"
                      padding="5px"
                      backgroundColor="#6ecacb"
                      tag="span"
                    >
                      {' // '}
                    </Text>
                    <Text
                      textAlign="center"
                      flex="1"
                      textTransform="uppercase"
                      color="#444"
                      fontSize="14px"
                      padding="5px"
                      justifyContent="center"
                      alignItems="center"
                      href={projectInfo.link}
                    >
                      Visitar repositório
                    </Text>
                    <Text
                      color="white"
                      display="inline-block"
                      padding="5px"
                      backgroundColor="#6ecacb"
                      tag="span"
                    >
                      <i className="fab fa-github" />
                    </Text>

                  </Box>

                </Grid.Col>
              </Grid.Row>
            </Grid.Container>
            <Box
              margin="70px 0px 0px 0px"
              boxShadow="0px 0px 0px 1px #e4168a, 2px 2px 0px 1px #f0f0f0, 4px 4px 0px 1px #00b795"
            />
          </Box>
        </WrapperProjeto>
      </Box>

    </Box>

  );
}

Projeto.propTypes = {
  projectInfo: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
};
