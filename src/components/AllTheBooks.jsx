import { Card } from 'react-bootstrap'
import books from '../data/fantasy.json'

const AllTheBooks = () => {
  return (
    <>
      {books.map((book) => (
        <Card className="mb-4">
          <Card.Img variant="top" src={book.img} alt={book.title} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>${book.price}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  )
}

export default AllTheBooks
