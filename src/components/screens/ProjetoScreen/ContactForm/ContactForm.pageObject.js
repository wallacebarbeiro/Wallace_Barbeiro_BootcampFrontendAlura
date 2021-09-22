export default class ContactFormPageObject {
  constructor(cy) {
    this.cy = cy;
    this.cy.visit('/');
    this.cy.get('#btnContatoHome').click();
    this.cy.get('form').should('be.visible');
  }

  fillContantForm({ name, email, message }) {
    this.cy.get('input[name="nome"]').type(name);
    this.cy.get('input[name="email"]').type(email);
    this.cy.get('textarea[name="message"]').type(message);

    return this;
  }

  submitContactForm() {
    this.cy.get('#formCadastro button[type="submit"]').click();

    return this;
  }
}
