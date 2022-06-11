import './App.css';
import SearchPage from './views/SearchPage';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import People from './components/People';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<SearchPage/>} />
          <Route path="/:id" element={<People/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
