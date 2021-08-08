import styled from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';

const Box = styled.div` 
    ${propToStyle('position')}
    ${propToStyle('display')}
    ${propToStyle('flex')}
    ${propToStyle('flexWrap')}
    ${propToStyle('flexDirection')}
    ${propToStyle('justifyContent')}
    ${propToStyle('backgroundColor')}
    ${propToStyle('backgroundImage')}
    ${propToStyle('backgroundImage')}
    ${propToStyle('backgroundImage')}
    ${propToStyle('backgroundImage')}
    ${propToStyle('order')}
    ${propToStyle('minWidth')}
    ${propToStyle('flexGrow')}
    background-color: #4158D0;
    background-color: #4d0079;
    background-image: -webkit-linear-gradient(0deg, #4d0079 0%, #330f47 44%, #120822 100%);
    background-image: -moz-linear-gradient(0deg, #4d0079 0%, #330f47 44%, #120822 100%);
    background-image: -o-linear-gradient(0deg, #4d0079 0%, #330f47 44%, #120822 100%);
    background-image: linear-gradient(0deg, #4d0079 0%, #330f47 44%, #120822 100%);
    ${propToStyle('background')}
`;

export default Box;
