import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import propToStyle from '../../../../theme/utils/propToStyle';
import Text from '../../../foundation/Text';

const TextContent = styled.div`
    ${propToStyle('display')}
    & p {margin: 0px;
    text-align: left;
    color: #444;
    font-size: 18px;
    font-weight: 300;
    padding: 0px 15px 15px 15px;
    line-height: 1.5;
    
    }
`;

export default function CardText({ tag, children, ...props }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <TextContent {...props}>
      <Text tag={tag}>
        {children}
      </Text>
    </TextContent>
  );
}

CardText.propTypes = {
  // eslint-disable-next-line react/require-default-props
  tag: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  tag: 'p',
};
