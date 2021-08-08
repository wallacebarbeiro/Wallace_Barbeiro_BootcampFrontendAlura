import React from 'react';
import styled from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';
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
    background-color: rgb(19 19 19);
    width:100%;
    border-radius: 10px;
    overflow:hidden; 
    -webkit-box-shadow: 0px 0px 11px 0px #010203, 6px 5px 0px 2px #00b795;
    box-shadow: 0px 0px 11px 0px #010203, 6px 5px 0px 2px #00b795; 
    ${propToStyle('justifyContent')} 
    ${propToStyle('alignItems')}  
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
        md: '25px',
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
          <CardDestaqueContent
            flex="2"
          >
            <CardImage
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
              md: '300px',
            }}
          >
            <CardTitle
              margin={{
                xs: '24px auto',
                md: '32px 0px 0px 0px',
              }}
              width={{
                xs: 'auto',
                lg: '130px',
              }}
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
        </ContainerCard>
      </CardDestaque>
      <ContainerCard
        justifyContent="center"
        alignItems="center"
      >
        <CardImage
          minWidth="100%"
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
      </ContainerCard>
      <ContainerCard
        justifyContent="center"
        alignItems="center"
      >
        <CardImage
          minWidth="100%"
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
      </ContainerCard>
      <ContainerCard
        justifyContent="center"
        alignItems="center"
      >
        <CardImage
          minWidth="100%"
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
      </ContainerCard>
    </Wrapercard>
  );
}
