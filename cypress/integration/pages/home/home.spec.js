/// <reference types="cypress" />

import ContactFormPageObject from '../../../../src/components/screens/ProjetoScreen/ContactForm/ContactForm.pageObject';

describe('/pages/index', () => {
  describe('when fill and submit a form contact send a message', () => {
    it('return a success alert', () => {
      cy.intercept('https://contact-form-api-jamstack.herokuapp.com/message')
        .as('userContact');

      const contactForm = new ContactFormPageObject(cy);

      contactForm
        .fillContantForm({ name: 'teste', email: 'a@a.com', message: 'teste de mensagem' })
        .submitContactForm();

      cy.wait('@userContact')
        .then((intercept) => {
          // const { token } = intercept.response.body.data;
          // token é igual do server?
          // cy.getCookie('APP_TOKEN')
          //   .should('exist')
          //   .should('have.property', 'value', token);
          // eslint-disable-next-line no-console
          console.log(intercept);
        });
      cy.get('#formCadastro').find('.successMsg');
    });
  });
});
