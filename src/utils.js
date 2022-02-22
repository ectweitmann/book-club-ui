export const cleanBookData = (book) => {
  return  {
    id: book.id,
    isbn: book.isbn,
    title: book.title,
    description: book.description,
    amazon_link: book['amazon_link'],
    book_image: book['book_image'],
    author: book.author
  } 
}

