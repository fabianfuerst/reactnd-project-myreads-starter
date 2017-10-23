import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger'

class Book extends Component {
  render() {
    const { books, book, changeShelf } = this.props
    return(
        <li>
          <div className="book" id='book1'>
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
              <ShelfChanger
              changeShelf={ changeShelf }
              books={ books }
              book={ book}/>
            </div>
            <div className="book-title">{book.title}</div>
            {book.authors && book.authors.map((author, index) => (
              <div className="book-authors" key={index}>{author}</div>
            ))}
          </div>
        </li>
    )
  }
}


export default Book
