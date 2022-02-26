describe('Book Club favorites page user flow', () => {

  it('should display favorited book cards', () => {
    cy.intercept('https://book-club-api-2110.herokuapp.com/api/v1/favorites', { fixture:'favoritedBooks.json' })
    cy.visit('http://localhost:3000/favorites')
      .get(".logo").should('have.attr', 'alt', 'Book club logo')
      .get('.landing-page-link').contains('Return Home »')
      .get('.book-card').should('have.length', 2)
      .get('.book-card').contains('The Midnight Library')
      .get('.book-card').contains('Matt Haig')
      .get('.book-cover').should('have.attr', 'src', 'https://storage.googleapis.com/du-prd/books/images/9780525559474.jpg')
      .get('.learn-more-btn').contains('Learn More')
      .get('.book-card').contains('Abandoned in Death')
      .get('.book-card').contains('J.D. Robb')
      .get('.book-cover').last().should('have.attr', 'src', 'https://storage.googleapis.com/du-prd/books/images/9781250278210.jpg')
      .get('.learn-more-btn').contains('Learn More')
    })

  it('should display a message to user when there are no books favorited', () => {
    cy.intercept('https://book-club-api-2110.herokuapp.com/api/v1/favorites', { favorites: [] })
    cy.visit('http://localhost:3000/favorites')
      .get(".logo").should('have.attr', 'alt', 'Book club logo')
      .get('.landing-page-link').contains('Return Home »')
      .get('.book-card').should('have.length', 0)
      .get('.empty-favorites-msg').contains('You haven\'t added any favorites yet -- get to it!')
  })

  it('should allow a user to return to landing page', () => {
    cy.intercept('https://book-club-api-2110.herokuapp.com/api/v1/favorites', { favorites: 'favoritedBooks.json' })
    cy.visit('http://localhost:3000/favorites')
      .get(".logo").should('have.attr', 'alt', 'Book club logo').click()
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:3000/')
    })
      .get('.favorites-link').contains('Your Favorites »')
  })

})