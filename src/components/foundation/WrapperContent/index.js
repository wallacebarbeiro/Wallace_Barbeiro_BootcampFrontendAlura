import styled from 'styled-components';

const WrapperContent = styled.div`
    position:relative;
    flex:1;
    width: 100%;
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    align-items:center;
    justify-content:space-between; 
    
    /* & h1 {
        text-align: center;
        color: #c100a5;
    } */
    & h2 {
        text-align: center;
        color: #fff;
        display: inline-block;
    }   
`;
export default WrapperContent;
