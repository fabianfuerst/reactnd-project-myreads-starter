import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import Book from './Book'

class SearchBooks extends Component {
  state = {
    query: '',
    foundBooks: []
  }

  searchBooks = (event) => {
    const query = event.target.value.trim()
    this.setState({query: query})

    if (query) {
      BooksAPI.search(query, 20).then((books) => {
        this.setState({foundBooks: books})
      })
    }

  }

  render() {
    const { books, changeShelf } = this.props
    const { query, foundBooks } = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={query} onChange={this.searchBooks}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {foundBooks.map((book) =>
              <div className="bookshelf-books">
                <Book
                books={books}
                book={book}
                changeShelf={ changeShelf }/>
              </div>
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
