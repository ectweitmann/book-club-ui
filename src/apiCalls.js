import { handleResponse } from "./utils";

export const apiCalls = {
  getAllBooks() {
    return fetch('https://book-club-api-2110.herokuapp.com/api/v1/books')
      .then(response => handleResponse(response))
  },
  getSingleBook(isbn) {
    return fetch(`https://book-club-api-2110.herokuapp.com/api/v1/books/${isbn}`)
      .then(response => handleResponse(response))
  },
  getAllFavorites() {
    return fetch('https://book-club-api-2110.herokuapp.com/api/v1/favorites')
      .then(response => handleResponse(response))
  },
  addToFavorites(favoriteBook) {
    return fetch('https://book-club-api-2110.herokuapp.com/api/v1/favorites', {
      method: 'POST',
      body: JSON.stringify(favoriteBook),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => handleResponse(response))
  },
  deleteFromFavorites(isbn) {
    return fetch(`https://book-club-api-2110.herokuapp.com/api/v1/favorites/${isbn}`, { method: 'DELETE' })
      .then(response => handleResponse(response))
  }, 
  updateFavStatus(selectedBook) {
    return fetch(`https://book-club-api-2110.herokuapp.com/api/v1/books/${selectedBook.isbn}`, {
      method: 'PATCH',
      body: JSON.stringify({isFavorited: !(selectedBook.isFavorited === 'true')}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => handleResponse(response))
  }
}