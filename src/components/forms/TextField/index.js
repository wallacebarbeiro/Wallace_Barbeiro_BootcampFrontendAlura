import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../../foundation/Text';

const InputWrapper = styled.div`
  margin-bottom: 17px;
`;

const Input = styled(Text)`
  width: 100%;
  border: 1px solid #444;
  background-color: transparent;
  padding: 12px 16px;
  outline: 0;
  border-radius: 0px;
  margin-bottom: 10px;
  color: #000;
  resize: none;

&::-webkit-input-placeholder  {
    color: #000;
}
    
&::-moz-placeholder {
    color: #000;
}
    
&:-ms-input-placeholder  {
    color: #000;
}
    
&:-moz-placeholder  {
    color: #000;
}
  
`;

Input.defaultProps = {
  tag: 'input',
  variant: 'paragraph1',
};

export default function TextField({
  placeholder,
  name,
  onChange,
  value,
  tag,
  type,
}) {
  return (
    <InputWrapper>
      <Input
        as={tag}
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
    </InputWrapper>
  );
}

TextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  tag: PropTypes.string,
};

TextField.defaultProps = {
  tag: 'input',
  type: 'text',
};
