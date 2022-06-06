import React, { useState } from 'react';
import './App.css';
import Register from './views/Register';
import Home from './views/Home'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CharacterDetail from './views/CharacterDetail';

function App() {

  const [user,setUser] = useState({
    userName: '',
    email: '',
    password:'',
    confirmPassword:'',
    age:''
  });

  return (
    <div className="App">
      <h1>{user?.userName !== '' ? `Bienvenido ${user.userName}` : `Ingresa tus datos`}</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register setUser={setUser}/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/character/:id" element={<CharacterDetail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
