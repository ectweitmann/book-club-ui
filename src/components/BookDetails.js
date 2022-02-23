import React, { Component } from "react";
import { apiCalls } from "../apiCalls";
import '../styles/BookDetails.css';
import { cleanBookData } from "../utils";

class BookDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBook: {},
      error: ''
    }
  }

  componentDidMount = () => {
    apiCalls.getSingleBook(this.props.id)
      .then(bookData => {
        const cleanedBookData = cleanBookData(bookData[0]);
        this.setState({ selectedBook: cleanedBookData });
      })
      .catch(error => this.setState({ error: error.message }))
  }

  render() {
    return (
        <section className="book-details">
          <img src={this.state.selectedBook.book_image}/>
          <div className="book-details-text-container">
            <h2 className="selected-title">{this.state.selectedBook.title}</h2>
            <p className="selected-author">{this.state.selectedBook.author}</p>
            <p className="selected-description">{this.state.selectedBook.description}</p>
            <div className="button-container">
              <button className="favorite-button">Add to Favorites</button>
              <a href={this.state.selectedBook.amazon_link} className="amazon-store-link" target="_blank" rel="noopener noreferrer">Buy Book</a>
            </div>
          </div>
        </section>
      )
  }
}

export default BookDetails;