import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row } from 'react-bootstrap'
import CustomNavbar from './components/CustomNavbar'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import SingleBook from './components/SingleBook'
// import AllTheBooks from './components/AllTheBooks'

function EpiBook() {
  return (
    <>
      <header>
        <CustomNavbar />
      </header>
      <main>
        {/* <div class="container"> */}
        <Container>
          {/* <div class="row"> */}
          <Row className=" mt-3 g-3">
            <Welcome />
            {/* <AllTheBooks /> */}
            <SingleBook />
          </Row>
        </Container>
      </main>
      <footer>
        <MyFooter />
      </footer>
    </>
  )
}

export default EpiBook
