
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import { Dropdown,  DropdownButton} from 'react-bootstrap';
import { useNavigate, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar({ user, setUser }) {
  const navigate = useNavigate();

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        navigate('/')
        
      }
    });
  }

  return (
    <Navbar bg="light" expand="lg">
      {user? (
        <Container fluid>
        <Navbar.Brand as={NavLink} to="/">Uni Ghana</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            
          </Nav>
            <DropdownButton size='lg' variant="success" id="dropdown-basic-button" title="Dropdown button">  
                <Dropdown.Item href="#/action-1">Dropdown Item 1</Dropdown.Item>  
                <Dropdown.Item href="#/action-2">Dropdown Item 2</Dropdown.Item>  
                <Dropdown.Item href="#/action-3">Dropdown Item 3</Dropdown.Item>  
                <Dropdown.Item href="#/action-3">Dropdown Item 4</Dropdown.Item>  
            </DropdownButton> 
            <Button onClick={handleLogoutClick} variant="outline-success">Logout</Button>
        </Navbar.Collapse>
      </Container>    
      ):(
        <Container fluid>
        <Navbar.Brand as={NavLink} to="/">Uni Ghana</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
            <Nav.Link as={NavLink} to="/sign-up">Signup</Nav.Link>
          </Nav>
          <DropdownButton size='lg' variant="success" id="dropdown-basic-button" title="Dropdown button">  
                <Dropdown.Item href="#/action-1">Dropdown Item 1</Dropdown.Item>  
                <Dropdown.Item href="#/action-2">Dropdown Item 2</Dropdown.Item>  
                <Dropdown.Item href="#/action-3">Dropdown Item 3</Dropdown.Item>  
                <Dropdown.Item href="#/action-3">Dropdown Item 4</Dropdown.Item>  
          </DropdownButton> 
        </Navbar.Collapse>
      </Container>
      )}
      
    </Navbar>
  );
}

export default NavBar;