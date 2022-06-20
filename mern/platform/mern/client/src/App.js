import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './views/Home';
import FormPets from './views/FormPets';
import Pet from './views/Pet';

function App() {
  return (
    <div className="m-30">
      <h1>Pet Shelter</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pets/new' element={<FormPets />} />
          <Route path='/pets/:id' element={<Pet/>} />
          <Route path='/pets/:id/edit' element={<FormPets/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
