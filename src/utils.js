import { titleCase } from "title-case";

export const cleanBookData = (book) => {
  const title = titleCase(book.title.toLowerCase());
  return  {
    id: book.id,
    isbn: book.isbn,
    title: title,
    description: book.description,
    amazon_link: book['amazon_link'],
    book_image: book['book_image'],
    author: book.author,
    isFavorited: book.isFavorited
  }   
}

export const trimBookData = (book) => {
  return {
    isbn: book.isbn,
    title: book.title,
    description: book.description,
    amazon_link: book['amazon_link'],
    book_image: book['book_image'],
    author: book.author
  }
}

export const handleResponse = (response) => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error('Sorry, an error has occurred! Please try again later.')
  }
}
