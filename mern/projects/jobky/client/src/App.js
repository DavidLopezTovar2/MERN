import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import RegisterForm from './views/RegisterForm'
import LoginForm from './views/LoginForm';
import Home from './views/Home';
import JobofferForm from './views/JobofferForm';
import Joboffers from './views/Joboffers';
import Joboffer from './views/Joboffer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>;
          <Route path='/joboffers' element={<Joboffers/>}/>
          <Route path='/joboffers/create' element={<JobofferForm/>}/>
          <Route path="/job/:id" element={<Joboffer/>}/>;
          <Route path='/register' element={<RegisterForm/>}/>
          <Route path='/login' element={<LoginForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
