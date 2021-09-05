/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';
import Box from '../../foundation/Box';
import Text from '../../foundation/Text';
import CardDestaque, { CardDestaqueContent } from '../CardDestaque';
import CardImage from './CardImage';
import CardText from './CardText';
import CardTitle from './CardTitle';

const ContainerCard = styled.div`
    position:relative;
    flex:1;
    display:flex;
    flex-wrap:wrap;   
    flex-direction:row;    
    width:100%;
    overflow:hidden;
    padding:10px;     
    ${propToStyle('justifyContent')} 
    ${propToStyle('alignItems')}  
    &:hover{
      transform: translateY(-10px);
    }
    transition: transform .3s ease-in-out;
    &:hover .hoverEffect {
      box-shadow: 0px 0px 0px 1px #e4168a, 2px 2px 0px 1px #f0f0f0, 4px 4px 0px 1px #00b795;
    }
    .hoverEffect {
      transition: box-shadow .3s ease-in-out;
    }
    a {
      width: 100%;
    }
`;

const Wrapercard = styled.div`
    flex:1;
    display:flex;
    flex-wrap:wrap; 
    justify-content:flex-start;
    ${propToStyle('maxWidth')}
    ${propToStyle('alignItem')}
    ${propToStyle('flexDirection')}
    ${propToStyle('gap')}    
   
`;

export default function Card() {
  return (
    <Wrapercard
      flexDirection={{
        xs: 'column',
        md: 'row',
      }}
      maxWidth={{
        xs: '320px',
        md: '100%',
      }}
      gap={{
        xs: '32px',
        md: '5px',
      }}
      alignItems={{
        xs: 'center',
        md: 'flex-start',
      }}
    >
      <CardDestaque>
        <ContainerCard
          justifyContent={{
            xs: 'center',
            md: 'space-between',
          }}
          alignItems={{
            xs: 'center',
            md: 'flex-start',
          }}
        >
          <Text tag="a" href="#">
            <Box
              flexWrap="wrap"
              backgroundColor="white"
              display="flex"
              flexDirection={{
                xs: 'column',
                md: 'row',
              }}
              className="hoverEffect"
              overflow="hidden"
              maxWidth="100%"
              boxShadow="0px 0px 0px 1px #444, 2px 2px 0px 1px #f0f0f0, 4px 4px 0px 1px #444"
            >
              <CardDestaqueContent>
                <CardImage
                  width="100%"
                  minWidth="100%"
                  height={{
                    xs: '177px',
                    md: '320px',
                  }}
                  src="./images/49013742.png"
                  alt="img2"
                />
              </CardDestaqueContent>
              <CardDestaqueContent
                flex="1"
                minWidth={{
                  xs: '100%',
                  md: 'auto',
                }}
              >
                <CardTitle
                  margin={{
                    xs: '24px auto',
                    md: '32px 0px 0px 0px',
                  }}
                  textAlign={{
                    xs: 'center',
                    md: 'left',
                  }}
                  width="auto"
                  padding={{
                    xs: '0px',
                    md: '0px 15px',
                  }}
                >
                  Projeto Destaque
                </CardTitle>
                <CardText
                  tag="p"
                  display={{
                    xs: 'none',
                    md: 'block',
                  }}
                >
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Duis sit amet efficitur purus, at suscipit ex.`}
                </CardText>

              </CardDestaqueContent>
            </Box>
          </Text>
        </ContainerCard>
      </CardDestaque>
      <ContainerCard
        justifyContent="center"
        alignItems="center"
      >
        <Text tag="a" href="#">
          <Box
            backgroundColor="white"
            className="hoverEffect"
            overflow="hidden"
            maxWidth="100%"
            boxShadow="0px 0px 0px 1px #444, 2px 2px 0px 1px #f0f0f0, 4px 4px 0px 1px #444"
          >
            <CardImage
              width="100%"
              maxWidth="100%"
              height={{
                xs: '177px',
                md: '390px',
              }}
              src="./images/179739191.png"
              alt="img1"
            />
            <CardTitle>
              Projeto 1
            </CardTitle>
          </Box>
        </Text>
      </ContainerCard>
      <ContainerCard
        justifyContent="center"
        alignItems="center"
      >
        <Text tag="a" href="#">
          <Box
            backgroundColor="white"
            className="hoverEffect"
            overflow="hidden"
            maxWidth="100%"
            boxShadow="0px 0px 0px 1px #444, 2px 2px 0px 1px #f0f0f0, 4px 4px 0px 1px #444"
          >
            <CardImage
              width="100%"
              maxWidth="100%"
              height={{
                xs: '177px',
                md: '390px',
              }}
              src="./images/49013742.png"
              alt="img2"
            />
            <CardTitle>
              Projeto 2
            </CardTitle>
          </Box>
        </Text>
      </ContainerCard>
      <ContainerCard
        justifyContent="center"
        alignItems="center"
      >
        <Text tag="a" href="#">
          <Box
            backgroundColor="white"
            className="hoverEffect"
            overflow="hidden"
            maxWidth="100%"
            boxShadow="0px 0px 0px 1px #444, 2px 2px 0px 1px #f0f0f0, 4px 4px 0px 1px #444"
          >
            <CardImage
              width="100%"
              maxWidth="100%"
              height={{
                xs: '177px',
                md: '390px',
              }}
              src="./images/179739191.png"
              alt="img3"
            />
            <CardTitle>
              Projeto 3
            </CardTitle>
          </Box>
        </Text>
      </ContainerCard>
    </Wrapercard>
  );
}
