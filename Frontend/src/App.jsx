
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ingrediente from './Views/Ingrediente';
import Sabor from './Views/Sabor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/Cadastros/Ingrediente' element={<Ingrediente />} />
        <Route path='/Cadastros/Sabor' element={<Sabor />} />
      </Routes>
    </Router>
  );
}

export default App;