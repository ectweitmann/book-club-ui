import React from "react";
import '../styles/BookContainer.css';
import BookCard from "./BookCard";
import PropTypes from 'prop-types';

const BookContainer = ({ allBooks }) => {
  const bookCards = allBooks.map((book) => {
    return (
      <BookCard
        key={book.id}
        id={book.id}
        isbn={book.isbn}
        title={book.title}
        bookImage={book.book_image}
        author={book.author}
      />
    )
  })
  return (
    <section className="book-container">
      {bookCards}
    </section>
  )
}

export default BookContainer;

BookContainer.propTypes = {
  allBooks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    isbn: PropTypes.string,
    title: PropTypes.string,
    bookImage: PropTypes.string,
    author: PropTypes.string
  }))
}