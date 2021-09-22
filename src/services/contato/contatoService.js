/* eslint-disable import/prefer-default-export */

import { isStagingEnv } from '../../infra/env/isStagingEnv';

async function HttpClient(url, { headers, body, ...options }) {
  return fetch(url, {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...options,
  })
    .then((resostaDoServidor) => {
      if (resostaDoServidor.ok) {
        return resostaDoServidor.json();
      }
      throw new Error('Não foi possível cadastrar');
    });
}

const BASE_URL = isStagingEnv
  // Back End de Dev
  ? 'https://contact-form-api-jamstack.herokuapp.com'
  // Back End de Prod
  : 'https://contact-form-api-jamstack.herokuapp.com';

export const contatoService = {
  async contato({
    nome,
    email,
    message,
  },
  setSubmissionsStatus,
  formStates,
  setValues) {
    // Data Transfer Object
    const userDTO = {
      email,
      name: nome,
      message,
    };
    return HttpClient(`${BASE_URL}/message`, {
      method: 'POST',
      body: userDTO,
    })
      .then((respostacompleta) => {
        setSubmissionsStatus(formStates.DONE);
        return respostacompleta;
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        setSubmissionsStatus(formStates.ERROR);
      })
      .finally(() => {
        setTimeout(() => {
          setSubmissionsStatus(formStates.DEFAULT);
        }, 5000);
        setValues({
          email: '',
          nome: '',
          message: '',
        });
      });
  },
};
