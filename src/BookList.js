import React, { Component } from 'react'
import BookShelf from './BookShelf'

class BookList extends Component {
  render(){
    const bookShelfs = [
      {type: 'currentlyReading', title: 'currentlyReading'},
      {type: 'wantToRead', title: 'Want to Read'},
      {type: 'read', title: 'Read'}]

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="list-books-content">
          <div>
            <BookShelf />
          </div>
        </div>
      </div>
    )
  }
}

export default BookList
