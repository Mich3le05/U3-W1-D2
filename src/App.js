import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import CustomNavbar from './components/CustomNavbar'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import AllTheBooks from './components/AllTheBooks'

function App() {
  return (
    <div className="App">
      <header>
        <CustomNavbar />
      </header>
      <main>
        {/* <div class="container"> */}
        <Container>
          {/* <div class="row"> */}
          <Row className="justify-content-center mt-3 g-3">
            {/* <div class="col"> */}
            <Col xs={12} md={8} lg={6}>
              <Welcome />
              <AllTheBooks />
            </Col>
          </Row>
        </Container>
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  )
}

export default App
