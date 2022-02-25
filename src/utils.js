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

