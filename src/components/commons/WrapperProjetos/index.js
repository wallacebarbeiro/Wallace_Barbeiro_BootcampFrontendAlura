import styled from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';

const Section = styled.section`
    position:relative;
    flex:1;
    width: 100%;
    display:flex;
    flex-wrap:wrap;
    ${propToStyle('padding')}
    flex-direction:column;
    align-items:center;
    justify-content:space-between; 
`;

const Container = styled.div`
   max-width: 900px;
   margin: 0 auto;
   text-align: center;
`;

const WrapperProjetos = {
  Section,
  Container,
};

export default WrapperProjetos;
