
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ingrediente from './Views/Ingrediente';
import Ingrediente_Drinks from './Views/Ingrediente_Drinks'
import Sabor from './Views/Sabor';
import Login from './Views/telalogin';
import Home1 from './Views/home1';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/Cadastros/Ingrediente' element={<Ingrediente />} />
        <Route path='/Cadastros/Ingrediente_Drinks' element={<Ingrediente_Drinks />} />
        <Route path='/Cadastros/Sabor' element={<Sabor />} />
        <Route path='/telalogin' element={<Login />} />
        <Route path='/Home1' element={<Home1 />} />

      </Routes>
    </Router>
  );
}

export default App;