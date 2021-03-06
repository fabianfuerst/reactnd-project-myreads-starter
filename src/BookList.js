import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

class BookList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }
  render(){
    const bookShelfs = [
      {type: 'currentlyReading', title: 'Currently Reading'},
      {type: 'wantToRead', title: 'Want to Read'},
      {type: 'read', title: 'Read'}]
    const { books, changeShelf } = this.props
    return (
      <div className='list-books-content'>
        {bookShelfs.map( (shelf, index) =>
          <div className="bookshelf" key={index}>
            <h2 className="bookshelf-title">{shelf.title}</h2>
            <div className="list-books-content">
              <div>
                <BookShelf
                books={ books }
                shelf={ shelf }
                changeShelf={ changeShelf }/>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BookList
