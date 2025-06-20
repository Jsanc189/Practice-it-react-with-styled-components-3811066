import React from "react"
import BookDetails from "./BookDetails";
import books from "./challanges/bookData"
const BookList = () => {
  return (
    <div>
      <h1>My Reading List</h1>
      {books.map(book => (
        <BookDetails key={book.id} book={book} />
      ))}
    </div>
  );
};




export default BookList;