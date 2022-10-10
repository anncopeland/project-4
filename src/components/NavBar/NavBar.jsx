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
        <nav>
        
                <Link to="/homepage">home</Link>
                &nbsp; | &nbsp;
                <Link to="/todo">todo</Link>
                &nbsp; | &nbsp;
                <Link to="/notes">add notes</Link>
                &nbsp; | &nbsp;
                <Link to="/notes/notesList/:id">notes list</Link>
                <span>Welcome, {user.name}</span>
                &nbsp;&nbsp; <Link to={""} onClick={handleLogOut}>Logout</Link>
        </nav>
    )
}
export default NavBar;