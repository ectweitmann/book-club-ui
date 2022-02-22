export const apiCalls = {
  getAllBooks() {
    return fetch('https://book-club-api-2110.herokuapp.com/api/v1/books')
      .then(response => response.json())
  },
  getSingleBook(id) {
    return fetch(`https://book-club-api-2110.herokuapp.com/api/v1/books/${id}`)
      .then(response => response.json())
  },
  getAllFavorites() {
    return fetch('https://book-club-api-2110.herokuapp.com/api/v1/favorites')
      .then(response => response.json())
  },
  addToFavorites(favoriteBook) {
    return fetch('https://book-club-api-2110.herokuapp.com/api/v1/favorites', {
      method: 'POST',
      body: JSON.stringify(favoriteBook),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
  },
  deleteFromFavorites(id) {
    return fetch(`https://book-club-api-2110.herokuapp.com/api/v1/favorites/${id}`, { method: 'DELETE' })
      .then(response => response.json())
  } 
}