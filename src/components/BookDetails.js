import React, { Component } from "react";
import { apiCalls } from "../apiCalls";
import '../styles/BookDetails.css';
import { cleanBookData, trimBookData } from "../utils";


class BookDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBook: {},
      error: '',
    }
  }

  componentDidMount = () => {
    apiCalls.getSingleBook(this.props.isbn)
      .then(bookData => {
        const cleanedBookData = cleanBookData(bookData[0]);
        this.setState({ selectedBook: cleanedBookData});
      })
      .catch(error => this.setState({ error: error.message }))
  }

  handleDelete = () => {
    Promise.all([apiCalls.deleteFromFavorites(this.state.selectedBook.isbn), apiCalls.updateFavStatus(this.state.selectedBook)])
    .then(() => {
      return apiCalls.getSingleBook(this.props.isbn)
        .then(data => {
          const cleanedBookData = cleanBookData(data[0])
          this.setState({ selectedBook: cleanedBookData })
        })
    })
    .catch(error => this.setState({ error: error.message }))
  }

  handleAdd = () => {
    Promise.all([apiCalls.addToFavorites(trimBookData(this.state.selectedBook)), apiCalls.updateFavStatus(this.state.selectedBook)])
    .then(() => {
      return apiCalls.getSingleBook(this.props.isbn)
        .then(data => {
          const cleanedBookData = cleanBookData(data[0])
          this.setState({ selectedBook: cleanedBookData })
        })
    })
    .catch(error => this.setState({ error: error.message }))
  }

  determineButton = () => {
    if(this.state.selectedBook.isFavorited === 'true') {
      return <button className="unfavorite-button" onClick={() => this.handleDelete}>Remove from Favorites</button>
    } else {
      return <button className="favorite-button" onClick={() => this.handleAdd}>Add to Favorites</button>
    }
  }

  render() {

    return (
        <section className="book-details">
          <img className="selected-cover" src={this.state.selectedBook.book_image}/>
          <div className="book-details-text-container">
            <div className="book-text-div">
              <h2 className="selected-title">{this.state.selectedBook.title}</h2>
              <p className="selected-author">{this.state.selectedBook.author}</p>
              <p className="selected-description">{this.state.selectedBook.description}</p>
            </div>
            <div className="button-container">
              {this.determineButton()}
              <a href={this.state.selectedBook.amazon_link} className="amazon-store-link" target="_blank" rel="noopener noreferrer">Buy Book</a>
            </div>
          </div>
        </section>
      )
  }
}

export default BookDetails;
