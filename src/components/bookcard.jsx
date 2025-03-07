import React from 'react';

const BookCard = ({ book }) => {
  return (
    <div >
      <img src={book.image} alt={book.name} className="w-full h-40 object-cover rounded-lg" />
      <h2 >{book.title}</h2>
      <p > {book.genre}</p>
      <p ><strong>Author:</strong> {book.author}</p>
    </div>
  );
};

export default BookCard;