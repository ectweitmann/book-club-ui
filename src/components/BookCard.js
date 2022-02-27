import React from "react";
import '../styles/BookCard.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BookCard = ({title, author, bookImage, isbn, id }) => {
    return (
      <section className="book-card">
        <img className="book-cover" src={bookImage} alt={`${title} cover`}/>
        <div className="book-side-panel">
          <div className="book-side-panel-banner">
            <h2 className="book-title">{title}</h2>
            <p className="book-author">{author}</p>
          </div>
          <Link key={id} to={`/${isbn}/selectedBook`} className="learn-more-btn">Learn More</Link>
        </div>
      </section>
    )
}

export default BookCard;

BookCard.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string, 
  bookImage: PropTypes.string,
  isbn: PropTypes.string, 
  id: PropTypes.number
}
