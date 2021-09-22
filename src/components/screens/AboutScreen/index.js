/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from '../../foundation/Box';
import Grid from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';

const WrapperSobre = styled.div`
    .gloweffect img{
        transition: box-shadow .3s ease-in-out;
    }
    &:hover .gloweffect img{
        box-shadow: -16px -15px 0px 0px #6ecacb, 15px 20px 0px 2px #e4168a;
    }
`;

const BoxImagem = styled.div`
    margin-top:150px;
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

export default function Sobre({ projetos }) {
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

        <WrapperSobre>
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
                    <img src="https://github.com/wallacebarbeiro.png" alt="Minha imagem" />
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
                    Hey! My name is Wallace Barbeiro and welcome to my ship!
                  </Text>
                </Grid.Col>
                <Grid.Col
                  value={{ xs: 12, md: 12 }}
                  flex={1}
                >
                  <Text
                    variant=""
                    color="#444 !important"
                    tag="h2"
                    display="block !important"
                    textAlign="center !important"
                  >
                    {"Here's a little about who Wallace is 👨 🏳️‍🌈"}
                  </Text>
                </Grid.Col>
                <Grid.Col
                  value={{ xs: 12, md: 12 }}
                  flex={1}
                >
                  <Text
                    tag="p"
                    color="#444"
                    textAlign="center"
                  >
                    {" I'm 33 and I was born in Rio de Janeiro, Brazil. I currently live in São Paulo, Brazil. I have an undergraduate degree in Information Systems from Faculdades Paraíso in São Gonçalo - Rio de Janeiro, 2010."}
                  </Text>

                </Grid.Col>
                <Grid.Col
                  value={{ xs: 12, md: 12 }}
                  flex={1}
                >
                  <Text
                    variant=""
                    color="#444"
                    tag="h3"
                    textAlign="center"
                  >
                    What is the purpose of this ship? 🎯
                  </Text>
                </Grid.Col>
                <Grid.Col
                  value={{ xs: 12, md: 12 }}
                  flex={1}
                >
                  <Text
                    tag="p"
                    color="#444"
                    textAlign="center"
                  >
                    {'Finding and ending any call from the main base using my developing and design abilities previously acquired in missions.'}
                  </Text>
                </Grid.Col>
                <Grid.Col
                  value={{ xs: 12, md: 12 }}
                  flex={1}
                >
                  <Text
                    variant=""
                    color="#444"
                    tag="h4"
                    textAlign="center"
                  >
                    Skills 🔫
                  </Text>
                </Grid.Col>
                <Grid.Col
                  value={{ xs: 12, md: 12 }}
                  flex={1}
                >
                  <Text
                    color="#444"
                    tag="p"
                    textAlign="center"
                  >
                    {'{ HTML5, CSS3, JAVASCRIPT, PHP, JQUERY, BOOTSTRAP, NEXT.JS, GIT }'}
                  </Text>
                </Grid.Col>
                <Grid.Col
                  value={{ xs: 12, md: 12 }}
                  flex={1}
                >
                  <Text
                    variant=""
                    color="#444"
                    tag="h4"
                    textAlign="center"
                  >
                    Missions (Projects)
                  </Text>
                </Grid.Col>
                <Grid.Col
                  value={{ xs: 12, md: 12 }}
                  flex={1}
                >
                  <Box
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="center"
                    alignItens="center"
                    gap="10px"
                  >
                    {projetos.map((projeto, index) => (
                      <Box
                        backgroundColor="white"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        color="#444"
                        flex="1 1 30%"
                        font-weight="400"
                        border="5px solid #6ecacb"
                        key={projeto.name}
                      >

                        <Text
                          color="white"
                          display="inline-block"
                          padding="5px"
                          backgroundColor="#6ecacb"
                          tag="span"
                        >
                          {index}
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
                          href={`/projeto/${projeto.name}`}
                        >
                          {projeto.name.length < 35 ? projeto.name : projeto.name.substring(0, 20)}
                        </Text>
                        <Text
                          color="white"
                          display="inline-block"
                          padding="5px"
                          backgroundColor="#6ecacb"
                          tag="span"
                          href={projeto.html_url}
                        >
                          <i className="fab fa-github" />
                        </Text>

                      </Box>

                    ))}
                  </Box>
                </Grid.Col>
              </Grid.Row>
            </Grid.Container>
            <Box
              margin="70px 0px 0px 0px"
              boxShadow="0px 0px 0px 1px #e4168a, 2px 2px 0px 1px #f0f0f0, 4px 4px 0px 1px #00b795"
            />
          </Box>
        </WrapperSobre>
      </Box>
    </Box>

  );
}

Sobre.defaultProps = {
  projetos: [],
};

Sobre.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  projetos: PropTypes.array,
};
