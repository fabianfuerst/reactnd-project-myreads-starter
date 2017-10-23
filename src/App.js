import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route, Link } from 'react-router-dom'
import BookList from './BookList'
import Search from './Search'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  changeShelf = (updatedBook, updatedShelf) => {
    BooksAPI.update(updatedBook, updatedShelf).then(response =>{
      updatedBook.shelf = updatedShelf
      var updatedBooks = this.state.books.filter( book => book.id !== updatedBook.id)

      this.setState(() => {
        const concatBooks = updatedBooks.concat(updatedBook)
        return{books: concatBooks}
      })
    })
  }

  render() {
    const { books } = this.state
    return (
      <div className="app">
        <Route exact path = '/' render = {() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <BookList
            books={ books }
            changeShelf={ this.changeShelf }/>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
        )}/>
        <Route exact path = '/search' render = {() => (
          <Search
          books={ books }
          changeShelf={ this.changeShelf }/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
