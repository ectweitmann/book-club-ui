import React, { Component } from 'react';
import { apiCalls } from '../apiCalls.js';
import { cleanBookData } from '../utils';
import BookContainer from './BookContainer';
import '../styles/Favorites.css';

class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      favorites: []
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
    return (
      <BookContainer allBooks={this.state.favorites}/>
    )
  }
}

export default Favorites;
