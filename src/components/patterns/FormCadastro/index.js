/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback } from 'react';
import { Lottie } from '@crello/react-lottie';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import successAnimation from './animations/success.json';
import errorAnimation from './animations/error.json';
import TextField from '../../forms/TextField';
import Box from '../../foundation/Box';
import Text from '../../foundation/Text';
import BoxButton from '../../commons/Button';
import { useForm } from '../../../infra/hooks/forms/useForm';
import { contatoService } from '../../../services/contato/contatoService';

const contactSchema = yup.object().shape({
  nome: yup.string().required('"Usuário" é obrigatório').min(3, 'Preencha ao menos 3 caracteres'),
  email: yup.string().required('"Email" é obrigatório').min(4, 'Preencha ao menos 4 caracteres'),
  message: yup.string().required('"Messagem" é obrigatória').min(10, ' Sua mensagem precisa ter ao menos 10 caracteres'),
});

export function FormContent({ onSubmit }) {
  const initialValues = {
    email: '',
    nome: '',
    message: '',
  };

  const form = useForm({
    initialValues,
    onSubmit: (values, setSubmissionsStatus, formStates, setValues) => {
      form.setIsFormSubmited(true);
      form.setIsFormDisabled(true);
      contatoService.contato(values, setSubmissionsStatus, formStates, setValues)
        // eslint-disable-next-line no-console
        .then(() => {})
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.error(err);
        })
        .finally(() => {
          form.setIsFormDisabled(false);
        });
    },
    async validadeSchema(values) {
      return contactSchema.validate(values, {
        abortEarly: false,
      });
    },
  });

  return (
    <form
      id="formCadastro"
      onSubmit={onSubmit || form.handleSubmit}
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
            placeholder="Seu nome"
            name="nome"
            value={form.values.nome}
            isTouched={form.touched.nome}
            onChange={form.handleChange}
            error={form.errors.nome}
            onBlur={form.handleBlur}
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
            placeholder="Seu email"
            name="email"
            value={form.values.email}
            isTouched={form.touched.email}
            onChange={form.handleChange}
            error={form.errors.email}
            onBlur={form.handleBlur}
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
            placeholder="Mensagem"
            name="message"
            value={form.values.message}
            isTouched={form.touched.message}
            onChange={form.handleChange}
            error={form.errors.message}
            onBlur={form.handleBlur}
          />
        </label>
      </div>
      <BoxButton
        id="btnEnviarContato"
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
        disabled={form.isFormDisabled}
      >
        Enviar
      </BoxButton>
      {form.insFormSubmited && form.submissionsStatus === form.formStates.DONE && (
      <div
        className="successMsg"
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
          config={{ animationData: successAnimation, loop: true, autoplay: true }}
        />
      </div>
      )}
      {form.insFormSubmited && form.submissionsStatus === form.formStates.ERROR && (
      <div
        className="errorMsg"
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

FormContent.defaultProps = {
  onSubmit: undefined,
};

FormContent.propTypes = {
  onSubmit: PropTypes.func,
};
