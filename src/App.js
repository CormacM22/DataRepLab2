//imports or navbar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
// imports from the file components
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/contents';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
  // returns my functions
  return (
    <BrowserRouter>
    <div className="App">
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="Home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="Home">Home</Nav.Link>
            <Nav.Link href="Read">Read</Nav.Link>
            <Nav.Link href="Create">Create</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/Home' element={<Content></Content>}></Route>
        <Route path='/Read' element={<Footer></Footer>}></Route>
        <Route path='/Create' element={<Header></Header>}></Route>
      </Routes>

      
      {/* <Header></Header>
      <Footer></Footer>
      <Content></Content> */}
    </div>
    </BrowserRouter>

  );
}

export default App;
