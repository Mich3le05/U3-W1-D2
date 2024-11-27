import { Component } from 'react'
import { Row } from 'react-bootstrap'
import SingleBook from './SingleBook'

class BookList extends Component {
  render() {
    const { books } = this.props

    return (
      <Row className="mt-3 g-3">
        {books.map((book) => (
          <SingleBook key={book.asin} book={book} />
        ))}
      </Row>
    )
  }
}

export default BookList
