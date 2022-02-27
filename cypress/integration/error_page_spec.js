describe('Book Club error page user flow', () => {

  it('should display 404 page when visiting a bad link', () => {
    cy.visit('http://localhost:3000/4823483290434903')
      .get('.error').contains('PAGE NOT FOUND.')
      .get('.message').contains('We are so sorry, but this page does not exist')
      .get('.logo-link').click()
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:3000/')
    })
  })

})