import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {
  render() {
    const { books, shelf } = this.props
    const shelfBooks = books.filter((book) => book.shelf === shelf.type)
    return(
      <ol className="books-grid">
        {shelfBooks.map((book) =>
          <div className="bookshelf-books">
            <Book
            books= {books}
            book = {book}/>
          </div>
        )}
      </ol>
    )
  }
}

export default BookShelf
