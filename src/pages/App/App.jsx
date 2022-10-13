import './App.css';
import {useState} from 'react';
// Import the following components
import AuthPage from '../AuthPage/AuthPage';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import TodoPage from '../../components/TodoPage/TodoPage';
import TodoList from '../TodoList/TodoList';
import NotesPage from '../NotesPage/NotesPage';
import AboutPage from '../AboutPage/AboutPage';
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
    const [user, setUser] = useState(getUser())
    const [todos, setTodos] = useState();

    const addTodo = text => {
        const newTodos = [...todos, text];
        setTodos(newTodos);
        console.log(newTodos)
    };

    function addUsername(newUsername) {
        console.log(`new username: ${newUsername}`)
        setUser([user, newUsername])
    }

    return (
        <main className="App">
            {user ?
                <>
                    <NavBar user={user} setUser={setUser}/>
                    <Routes>
                        <Route path="/homePage" element={<HomePage user={user}/>}/>
                        <Route path="/todoPage" element={<TodoPage user={user} setUser={setUser} addTodo={addTodo} todoList={TodoList} />}/>
                        <Route path="/notesPage" element={<NotesPage user={user} />}/>
                        
                        <Route path="/aboutPage" element={<AboutPage />}/>
                    </Routes>
                   
                </>
                :
                <AuthPage setUser={setUser}/>}
        </main>
       
    );
}

export default App;