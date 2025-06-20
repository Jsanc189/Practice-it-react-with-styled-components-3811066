import React from "react";
import styled from "styled-components";


const BookDetails = ({ book }) => {
  return <BookContainer>
    <BookTitle>{book.title}</BookTitle>
    <p>Author: {book.author}</p>
    <p>Year: {book.year}</p>
  </BookContainer>
}

const BookContainer = styled.div`
  background-color: white;
  width: 300px;
  border: 2px solid black;
  border-radius: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-self: center;
`

const BookTitle = styled.h2`
  text-align: center;
`
export default BookDetails;