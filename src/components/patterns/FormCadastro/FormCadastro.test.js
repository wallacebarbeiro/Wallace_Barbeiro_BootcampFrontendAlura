import React from 'react';
import user from '@testing-library/user-event';
import { FormContent as FormCadastro } from './index';
import {
  render, act, screen, waitFor,
} from '../../../infra/tests/testUtils';

const onSubmit = jest.fn();
onSubmit.mockImplementation((event) => {
  event.preventDefault();
});

describe('<FormCadastro />', () => {
  describe('when from fields are valid', () => {
    test('complete the sumission', async () => {
      await act(async () => render(
        <FormCadastro
          onSubmit={onSubmit}
        />,
      ));

      expect(screen.getByRole('button')).toBeDisabled();

      const inputNome = screen.getByPlaceholderText('Seu nome');
      user.type(inputNome, 'someusername');
      await waitFor(() => expect(inputNome).toHaveValue('someusername'));

      const inputEmail = screen.getByPlaceholderText('Seu email');
      user.type(inputEmail, 'a@a.com');
      await waitFor(() => expect(inputEmail).toHaveValue('a@a.com'));

      const textareaMsg = screen.getByPlaceholderText('Mensagem');
      user.type(textareaMsg, 'testo para enviar aqui');
      await waitFor(() => expect(textareaMsg).toHaveValue('testo para enviar aqui'));

      expect(screen.getByRole('button')).not.toBeDisabled();

      user.click(screen.getByRole('button'));
      expect(onSubmit).toHaveBeenCalledTimes(1);
    });
  });

  describe('when form fields are invalid', () => {
    test('displays the respective errors', async () => {
      render(<FormCadastro onSubmit={onSubmit} />);

      const inputUsuario = screen.getByPlaceholderText('Seu nome');
      inputUsuario.focus();
      inputUsuario.blur();

      await waitFor(() => screen.getByRole('alert'));

      expect(screen.getByRole('alert')).toHaveTextContent('Preencha ao menos 3 caracteres');
    });
  });
});
