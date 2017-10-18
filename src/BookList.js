import React, { Component } from 'react'
import BookShelf from './BookShelf'

class BookList extends Component {
  render(){
    const bookShelfs = [
      {type: 'currentlyReading', title: 'Currently Reading'},
      {type: 'wantToRead', title: 'Want to Read'},
      {type: 'read', title: 'Read'}]

    return (
      <div className='list-books-content'>
        {bookShelfs.map( (shelf) =>
          <div className="bookshelf" id={shelf.type}>
            <h2 className="bookshelf-title">{shelf.title}</h2>
            <div className="list-books-content">
              <div>
                <BookShelf />
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BookList
