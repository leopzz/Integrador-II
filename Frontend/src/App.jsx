
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ingrediente from './Views/Ingrediente';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/Cadastros/Ingrediente' element={<Ingrediente />} />
      </Routes>
    </Router>
  );
}

export default App;