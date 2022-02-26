describe('Book Club book details page user flow', () => {

  it('should display all book details for a single book', () => {
    cy.intercept('https://book-club-api-2110.herokuapp.com/api/v1/books/2', { fixture: 'singleBook.json' })
    cy.visit('http://localhost:3000/2')
      .get('img').should('have.attr', 'src', 'https://storage.googleapis.com/du-prd/books/images/9780525559474.jpg')
      .get('.selected-title').contains('The Midnight Library')
      .get('.selected-author').contains('Matt Haig')
      .get('.selected-description').contains('Nora Seed finds a library beyond the edge of the universe that contains books with multiple possibilities of the lives one could have lived.')
      .get('.favorite-button').contains('Add to Favorites')
      .get('.amazon-store-link').should('have.attr', 'href', 'https://www.amazon.com/dp/0525559477?tag=NYTBSREV-20' )
  })
  
})