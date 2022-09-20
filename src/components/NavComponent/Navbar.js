import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
import { GoSearch } from "react-icons/go";
import { FiFilter } from "react-icons/fi";
import NavNoAuth from "./NavNoAuth";
import NavWithAuth from "./NavWithAuth";

function NavBeforeLogin() {
  const token = false;
  return (
    <Navbar bg="light" expand="lg" className="nav-container">
      <Container fluid>
        <Navbar.Brand href="/" className="logo-brand">
          <img src={logo} className="logo" alt="logo" />
        </Navbar.Brand>
        <Form className="d-flex search-container">
          <div className="search-bar">
            <input className="search" type="text" placeholder="Search" />
            <GoSearch size={20} color="#8E8E93" />
          </div>
          <Button variant="outline-secondary btn-filter">
            <FiFilter size={20} color="#8E8E93" />
          </Button>
        </Form>
        {token ? <NavWithAuth /> : <NavNoAuth />}
      </Container>
    </Navbar>
  );
}

export default NavBeforeLogin;
