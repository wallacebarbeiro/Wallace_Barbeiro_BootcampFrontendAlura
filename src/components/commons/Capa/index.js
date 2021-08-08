import styled from 'styled-components';

const Capa = styled.div`
    position:relative;
    flex:1;
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    align-items:center;
    justify-content:center; 
    overflow:hidden;
    min-height: 100vh;
    &::before {
        opacity: .4;
        content:"";
        display: inline-block;
        width:300px;
        top:-100px;
        left:-100px;
        position:absolute;
        background: transparent url('../images/planet-svgrepo-com.svg') no-repeat left center;
        height: 300px;
    }
    &::after {
        opacity: .4;
        content:"";
        display: inline-block;
        width:300px;
        bottom:-65px;
        right:-40px;
        position:absolute;
        background: transparent url('../images/astronaut-ingravity-svgrepo-com.svg') no-repeat left center;
        height: 300px;
    }
     h2 {
         position: relative;
         text-align: right;
         &::before {
             position:absolute;
             bottom:-8px;
             right:0px;
             content: "";
             width:40%;
             height: 6px;
             background-color: #c100a5;
             display:block;
             -webkit-box-shadow:0px 20px 0px 0px #00b795;
             box-shadow: 0px 20px 0px 0px #00b795;
         }
         &::after {
             position:absolute;
             bottom:-18px;
             right:0px;
             content: "";
             width:30%;
             height: 6px;
             background-color: #3e3a3b;
             display:block;
         }

     }
`;

export default Capa;
