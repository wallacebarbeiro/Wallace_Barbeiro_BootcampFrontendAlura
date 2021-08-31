/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Lottie } from '@crello/react-lottie';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import successAnimation from './animations/success.json';
import errorAnimation from './animations/error.json';
import TextField from '../../forms/TextField';
import Box from '../../foundation/Box';
import Text from '../../foundation/Text';
import BoxButton from '../../commons/Button';

const formStates = {
  DEFAULT: 'DEFAULT',
  DONE: 'DONE',
  LOADING: 'LOADING',
  ERROR: 'ERROR',
};

function FormContent() {
  const [insFormSubmited, setIsFormSubmited] = React.useState(false);
  const [submissionsStatus, setSubmissionsStatus] = React.useState(formStates.DEFAULT);

  const [userInfo, setUserInfo] = React.useState({
    email: '',
    nome: '',
    message: 'Digite a sua Mensagem!',
  });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  // eslint-disable-next-line max-len
  const isFormInvalid = userInfo.email.length === 0 || userInfo.nome.length === 0 || userInfo.message.length === 0;
  const enviarForm = (event) => {
    event.preventDefault();

    setIsFormSubmited(true);

    // Data Transfer Object
    const userDTO = {
      email: userInfo.email,
      name: userInfo.nome,
      message: userInfo.message,
    };

    fetch('https://contact-form-api-jamstack.herokuapp.com/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDTO),
    })
      .then((resostaDoServidor) => {
        if (resostaDoServidor.ok) {
          return resostaDoServidor.json();
        }
        throw new Error('Não foi possível cadastrar');
      })
      .then((respostacompleta) => {
        setSubmissionsStatus(formStates.DONE);
        // eslint-disable-next-line no-console
        console.log(respostacompleta);
      })
      .catch((error) => {
        setSubmissionsStatus(formStates.ERROR);
        // eslint-disable-next-line no-console
        console.log(error);
      })
      .finally(() => {
        setTimeout(() => {
          setSubmissionsStatus(formStates.DEFAULT);
        }, 5000);
        setUserInfo({
          email: '',
          nome: '',
          message: 'Digite a sua Mensagem!',
        });
      });
  };

  return (
    <form
      onSubmit={enviarForm}
    >
      <Box
        backgroundColor="transparent"
        backgroundImage="none"
      >
        <Text
          tag="h1"
          color="#e4168a"
          fontSize="25px"
          maxWidth="367px"
          fontWeight="300"
          margin="10px 0px 35px 0px"
        >
          ENVIE SUA MENSAGEM
        </Text>
      </Box>
      <div>
        <label>
          <Text
            margin="10px 0px 5px 0px"
            color="#444"
          >
            Seu Nome
          </Text>
          <TextField
            placeholder=""
            name="nome"
            value={userInfo.nome}
            onChange={handleChange}
          />
        </label>

      </div>
      <div>
        <label>
          <Text
            margin="10px 0px 5px 0px"
            color="#444"
          >
            Seu Email
          </Text>
          <TextField
            type="email"
            placeholder=""
            name="email"
            value={userInfo.email}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          <Text
            margin="10px 0px 5px 0px"
            color="#444"
          >
            Sua mensagem
          </Text>
          <TextField
            tag="textarea"
            type=""
            placeholder=""
            name="message"
            value={userInfo.message}
            onChange={handleChange}
          />
        </label>
      </div>
      <BoxButton
        border="1px solid #fff"
        backgroundColor="#6ecacb"
        color="#fff"
        fontWeight="400"
        width="auto"
        fontSize="18px"
        textTransform="uppercase"
        padding="10px 20px"
        marginBottom="10px"
        cursor="pointer"
        type="submit"
        disabled={isFormInvalid}
      >
        Enviar
      </BoxButton>
      {insFormSubmited && submissionsStatus === formStates.DONE && (
      <div style={{
        position: 'absolute',
        top: '0px',
        height: '100%',
        background: 'rgb(255 255 255 / 78%)',
        width: '100%',
        left: '0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <Lottie
          width="250px"
          height="250px"
          className="lottie-container basic"
          config={{ animationData: successAnimation, loop: true, autoplay: true }}
        />
      </div>
      )}
      {insFormSubmited && submissionsStatus === formStates.ERROR && (
      <div
        style={{
          position: 'absolute',
          top: '0px',
          height: '100%',
          background: 'rgb(255 255 255 / 78%)',
          width: '100%',
          left: '0px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Lottie
          width="250px"
          height="250px"
          className="lottie-container basic"
          config={{ animationData: errorAnimation, loop: true, autoplay: true }}
        />
      </div>
      )}
    </form>
  );
}

const Button = styled.button`  
    color: #131313;
    font-weight: 900;
    border:0px;  
    width: 35px;
    height: 35px;
    font-size: 20px;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
`;

function CloseButton({ onClick }) {
  return (
    <Button
      onClick={onClick}
    >
      x
    </Button>
  );
}

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default function FormCadastro({ propsDoModal, setModalState }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div {...propsDoModal}>
      <CloseButton onClick={() => setModalState(false)}>X</CloseButton>
      <FormContent />
    </div>
  );
}

FormCadastro.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  propsDoModal: PropTypes.object,
  setModalState: PropTypes.func.isRequired,
};

FormCadastro.defaultProps = {
  propsDoModal: {},
};
