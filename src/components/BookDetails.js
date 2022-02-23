import React, { Component } from "react";
import '../styles/BookDetails.css';

class BookDetails extends Component {
  constructor() {
    super();
    this.state = {
      selectedBook: {},
      error: ''
    }
  }

  componentDidMount = () => {

  }

  render() {
    return (
        <section className="book-details">
          <img src={this.state.selectedBook.bookImage}/>
          <div className="book-details-text-container">
            <h2>{this.state.selectedBook.title}</h2>
            <p>{this.state.selectedBook.author}</p>
            <p>{this.state.selectedBook.description}</p>
            <div className="button-container">
              <button>Add to Favorites</button>
              <a href="{this.state.selectedBook.amazonLink}"></a>
            </div>
          </div>
        </section>
      )
  }
}

export default BookDetails;