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
    const { books } = this.props
    return (
      <div className='list-books-content'>
        {bookShelfs.map( (shelf) =>
          <div className="bookshelf" id={shelf.type}>
            <h2 className="bookshelf-title">{shelf.title}</h2>
            <div className="list-books-content">
              <div>
                <BookShelf
                books= { books }
                shelf = { shelf }/>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BookList
