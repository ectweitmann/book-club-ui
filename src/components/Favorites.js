import React, { Component } from 'react';
import { apiCalls } from '../apiCalls.js';
import { cleanBookData } from '../utils';
import BookContainer from './BookContainer';
import ErrorModal from './ErrorModal.js';
import '../styles/Favorites.css';

class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      favorites: [],
      error: ''
    }
  }

  componentDidMount = () => {
    apiCalls.getAllFavorites()
      .then(booksData => {
        const cleanedBooksData = booksData.map(book => cleanBookData(book));
        this.setState({ favorites: cleanedBooksData})
      })
      .catch(error => this.setState({ error: error.message}))
  }

  render() {
    const errorModal = this.state.error ? <ErrorModal message={this.state.error}/> : null
    return (
      <>
        {!this.state.favorites.length && <h2 className="empty-favorites-msg">You haven't added any favorites yet -- get to it!</h2>}
        <BookContainer allBooks={this.state.favorites}/>
        {errorModal}
      </>
    )
  }
}

export default Favorites;
