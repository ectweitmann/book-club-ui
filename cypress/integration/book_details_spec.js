describe('Book Club book details page user flow', () => {

  it('should display all book details for a single book', () => {
    cy.intercept('https://book-club-api-2110.herokuapp.com/api/v1/books/9780525559474', { fixture: 'singleBook.json' })
    cy.visit('http://localhost:3000/9780525559474/selectedBook')
      .get('.selected-cover').should('have.attr', 'src', 'https://storage.googleapis.com/du-prd/books/images/9780525559474.jpg')
      .get('.selected-title').contains('The Midnight Library')
      .get('.selected-author').contains('Matt Haig')
      .get('.selected-description').contains('Nora Seed finds a library beyond the edge of the universe that contains books with multiple possibilities of the lives one could have lived.')
      .get('.favorite-button').contains('Add to Favorites')
      .get('.amazon-store-link').should('have.attr', 'href', 'https://www.amazon.com/dp/0525559477?tag=NYTBSREV-20' )
  })

  it('should allow a user to add book to favorites', () => {
    cy.intercept('https://book-club-api-2110.herokuapp.com/api/v1/books/9780525559474', { fixture: 'singleBook.json' }).as('getSingleBook')
    // cy.intercept('POST', 'https://book-club-api-2110.herokuapp.com/api/v1/favorites',  
    //  {
    //    statusCode: 201,
    //    body: {
    //       "isbn": "9780525559474",
    //       "title": "The Midnight Library",
    //       "description": "Nora Seed finds a library beyond the edge of the universe that contains books with multiple possibilities of the lives one could have lived.",
    //       "amazon_link": "https://www.amazon.com/dp/0525559477?tag=NYTBSREV-20",
    //       "book_image": "https://storage.googleapis.com/du-prd/books/images/9780525559474.jpg",
    //       "author": "Matt Haig"
    //     }
    //  }).as('postFavorite')
    cy.intercept('PATCH', 'https://book-club-api-2110.herokuapp.com/api/v1/books/9780525559474', { "isFavorited": "true" }).as('patchRequest')
    // cy.intercept('https://book-club-api-2110.herokuapp.com/api/v1/favorites').as('getFavsRequest')
    cy.visit('http://localhost:3000/9780525559474/selectedBook')
      .get('.button-container').find('.favorite-button').click()
    // cy.wait(['@getSingleBook', '@postFavorite', '@patchRequest'])
      // .get('.unfavorite-button').contains('Remove from Favorites')
      .get('.favorites-link').click()
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:3000/favorites')
    })
      .get('.book-card').contains('The Midnight Library')
      .get('.book-card').contains('Matt Haig')
      .get('.book-cover').should('have.attr', 'src', 'https://storage.googleapis.com/du-prd/books/images/9780525559474.jpg')
      .get('.learn-more-btn').contains('Learn More')
  })
  
})