import {Link} from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBar({user, setUser}) {

    function handleLogOut(){
        userService.logOut();
        setUser(null);
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">mytodos</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="/todoPage">home</Nav.Link>
                    <Nav.Link href="/aboutPage">about</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/todoPage">todos...</NavDropdown.Item>   
                        <NavDropdown.Item href="/notesPage">notes...</NavDropdown.Item>
                        <NavDropdown.Divider />
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>

               
                <span>Welcome, {user.name}</span>
                &nbsp;&nbsp; <Link to={""} onClick={handleLogOut}>Logout</Link>
         </Container> 
        </Navbar>
    )
}
export default NavBar;