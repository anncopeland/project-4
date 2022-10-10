import './App.css';
import {useState} from 'react';
// Import the following components
import AuthPage from '../AuthPage/AuthPage';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import TodoPage from '../TodoPage/TodoPage';
import NotesPage from '../NotesPage/NotesPage';
import NotesList from '../NotesListPage/NostesListPage';
import {getUser} from '../../utilities/users-service';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import ListGroup from 'react-bootstrap/ListGroup';
  
function App() {
    // set the user by calling getUser function
    const [user, setUser] = useState(null)

    function addUsername(newUsername) {
        console.log(`new username: ${newUsername}`)
        setUser([user, newUsername])
    }

    return (
        < main className="App">
            {user ?
                <>
                    <NavBar user={user} setUser={setUser}/>
                    <Routes>
                        <Route path="/homePage" element={<HomePage  />}/>
                        <Route path="/todo" element={<TodoPage  />}/>
                        <Route path="/notes" element={<NotesPage   />}/>
                        <Route path="/notes/notesList/:id" element={<NotesList  />}/>
                    </Routes>
                </>
                :
                <AuthPage setUser={setUser}/>}

        </main>
    );
}

export default App;