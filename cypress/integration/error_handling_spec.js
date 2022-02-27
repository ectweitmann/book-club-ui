describe('Book Club error modal for handling any error outside the catch', () => {
  
  it('should show error modal when loading page is unavailable', () => {
    cy.intercept('GET', 'https://book-club-api-2110.herokuapp.com/api/v1/books', {statusCode: 500})
    cy.visit('http://localhost:3000/')
    cy.get('.error-message')
      .should('have.text', 'Sorry, an error has occurred! Please try again later.')
  })

  it('should show error modal when book details is unavailable', () => {
    cy.intercept('GET', 'https://book-club-api-2110.herokuapp.com/api/v1/books/9780525559474', {statusCode: 500})
    cy.visit('http://localhost:3000/9780525559474/selectedBook')
    cy.get('.error-message')
      .should('have.text', 'Sorry, an error has occurred! Please try again later.')
  })

  it('should show error modal when the Add to Favorites button is not working', () => {
    cy.intercept('POST', 'https://book-club-api-2110.herokuapp.com/api/v1/favorites', {statusCode: 500})
    cy.visit('http://localhost:3000/9780525559474/selectedBook')
      .get('.button-container').find('.favorite-button').click()
    cy.get('.error-message')
      .should('have.text', 'Sorry, an error has occurred! Please try again later.')
  })

  it('should show error modal when the Remove from Favorites button is not working', () => {
    cy.intercept('POST', 'https://book-club-api-2110.herokuapp.com/api/v1/favorites',  
     {
       statusCode: 201,
       body: {
          "isbn": "9780525559474",
          "title": "The Midnight Library",
          "description": "Nora Seed finds a library beyond the edge of the universe that contains books with multiple possibilities of the lives one could have lived.",
          "amazon_link": "https://www.amazon.com/dp/0525559477?tag=NYTBSREV-20",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9780525559474.jpg",
          "author": "Matt Haig"
        }
     })
    cy.intercept('PATCH', 'https://book-club-api-2110.herokuapp.com/api/v1/books/9780525559474', { "isFavorited": "true" })
    cy.intercept('GET', 'https://book-club-api-2110.herokuapp.com/api/v1/books/9780525559474', { fixture: 'isFavoritedSingleBook.json' })
    cy.intercept('DELETE', 'https://book-club-api-2110.herokuapp.com/api/v1/favorites/9780525559474', {statusCode: 500})
    cy.visit('http://localhost:3000/9780525559474/selectedBook')
      .get('.unfavorite-button').contains('Remove from Favorites').click()
    cy.get('.error-message')
      .should('have.text', 'Sorry, an error has occurred! Please try again later.')
  })
    
  it('should show error modal when Favorites page is unavailable', () => {
    cy.intercept('GET', 'https://book-club-api-2110.herokuapp.com/api/v1/favorites', {statusCode: 500})
    cy.visit('http://localhost:3000/favorites')
    cy.get('.error-message')
      .should('have.text', 'Sorry, an error has occurred! Please try again later.')
  })

})