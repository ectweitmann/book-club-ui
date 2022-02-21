import React from "react";
import '../styles/BookCard.css';
import { Link } from 'react-router-dom';

const BookCard = ({title, author, bookImage, id }) => {
    return (
      <section className="book-card">
        <img src={bookImage}/>
        <h2>{title}</h2>
        <p>{author}</p>
        <Link to={`/${id}`}>
          <button>Learn More</button>   
        </Link>
      </section>
    )
}

export default BookCard;