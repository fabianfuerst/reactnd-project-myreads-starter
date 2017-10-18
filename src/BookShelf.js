import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {
  render() {
    return(
      <ol className="books-grid">
        <div className="bookshelf-books">
          <Book />
        </div>
      </ol>
    )
  }
}

export default BookShelf
