describe('Book Club landing page user flow', () => {
  
  it('should display page title and all of the book cards', () => {
    cy.intercept('https://book-club-api-2110.herokuapp.com/api/v1/books', { fixture: 'landingPageBooks.json' })
    cy.visit('http://localhost:3000')
      .get('h1').contains('Book Club')
      .get('.book-card').should('have.length', 5)
      .get('.book-card').contains('Abandoned in Death')
      .get('.book-card').contains('J.D. Robb')
      .get('img').should('have.attr', 'src', 'https://storage.googleapis.com/du-prd/books/images/9781250278210.jpg')
      .get('button').contains('Learn More')
  });

});