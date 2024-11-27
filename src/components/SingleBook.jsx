import { Component } from 'react'
import { Card, Button, Col } from 'react-bootstrap'
import books from '../data/fantasy.json'

class SingleBook extends Component {
  render() {
    return (
      <>
        {books.map((book) => (
          <Col className="col 12, col-md-4, col-lg-3 " key={book.asin}>
            <Card className="mb-4 h-100">
              <Card.Img variant="top" src={book.img} alt={book.title} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>${book.price}</Card.Text>
                <Button variant="primary">Read</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </>
    )
  }
}

export default SingleBook
