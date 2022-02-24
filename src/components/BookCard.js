import React from "react";
import '../styles/BookCard.css';
import { Link } from 'react-router-dom';

const BookCard = ({title, author, bookImage, id }) => {
    return (
      <section className="book-card">
        <img className="book-cover" src={bookImage}/>
        <div className="book-side-panel">
          <div className="book-side-panel-banner">
            <h2 className="book-title">{title}</h2>
            <p className="book-author">{author}</p>
          </div>
          <Link to={`/${id}`} className="learn-more-container">
            <button className="learn-more-btn">Learn More</button>
          </Link>
        </div>
      </section>
    )
}

export default BookCard;
