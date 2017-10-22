import React, { Component } from 'react'

class ShelfChanger extends Component {
  render() {
    const { changeShelf, books, book } = this.props
    let currentShelf = ''
    for (let bookitem of books) {
      if (bookitem.id === book.id) {
        currentShelf = bookitem.shelf
        break
      }
    }
    return(
      <div className="book-shelf-changer">
        <select onChange={(event) => changeShelf(book, event.target.value)} defaultValue={ currentShelf }>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default ShelfChanger
