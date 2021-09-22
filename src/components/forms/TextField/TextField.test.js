import React from 'react';
import user from '@testing-library/user-event';
import { render, screen } from '../../../infra/tests/testUtils';
import TextField from './index';

describe('<TextField />', () => {
  test('renders component', () => {
    render(
      <TextField
        placeholder="Nome"
        value="Mario"
        onChange={() => {}}
        name="nome"
      />,
    );

    // screen.debug();
    const textField = screen.getByPlaceholderText(/nome/i);

    expect(textField).toMatchSnapshot();
  });

  describe('when field is valid', () => {
    describe('and user is typing', () => {
      test('the value must be update', () => {
        const onChangeMock = jest.fn();
        render(
          <TextField
            placeholder="nome"
            value=""
            onChange={onChangeMock}
            name="nome"
            isTouched
          />,
        );

        const inputNome = screen.getByPlaceholderText(/nome/i);
        user.type(inputNome, 'Teste');
        expect(onChangeMock).toHaveBeenCalledTimes(5);
      });
    });
  });

  describe('when field is invalid', () => {
    test('display the respective error message', () => {
      render(
        <TextField
          placeholder="email"
          value="aa.com"
          onChange={() => {}}
          name="email"
          isTouched
          error="O campo e-mail é obrigatório"
        />,
      );
      const inputEmail = screen.getByPlaceholderText(/email/i);
      expect(inputEmail).toHaveValue('aa.com');

      const errorMessage = screen.getByRole('alert');
      expect(errorMessage).toHaveTextContent('O campo e-mail é obrigatório');

      expect(inputEmail).toMatchSnapshot();
    });
  });
});
