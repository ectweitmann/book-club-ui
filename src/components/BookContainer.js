import React from "react";
import '../styles/BookContainer.css';
import BookCard from "./BookCard";

const BookContainer = ({ allBooks }) => {   
  const bookCards = allBooks.map((book) => {
    return (
      <BookCard 
        key={book.isbn}
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