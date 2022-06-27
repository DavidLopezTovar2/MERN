import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import RegisterForm from './views/RegisterForm'
import Container from 'react-bootstrap/Container';
import LoginForm from './views/LoginForm';

function App() {
  return (
    <Container className="m-5">
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<RegisterForm/>}/>
          <Route path='/login' element={<LoginForm/>}/>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
