
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ingrediente from './Views/Ingrediente';
import Ingrediente_Drinks from './Views/Ingrediente_Drinks'
import Sabores from './Views/Sabores';
import Bebida from './Views/Bebida'
import Acompanhamento from './Views/Acompanhamento'
import Drink from './Views/Drink'
import Entrada from './Views/Entrada'
import Massa from './Views/Massa'
import Login from './Views/telalogin';
import Home1 from './Views/home1';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/Cadastros/Ingrediente' element={<Ingrediente />} />
        <Route path='/Cadastros/Ingrediente_Drinks' element={<Ingrediente_Drinks />} />
        <Route path='/Cadastros/Bebida' element={<Bebida />} />
        <Route path='/Cadastros/Sabores' element={<Sabores />} />
        <Route path='/Cadastros/Acompanhamento' element={<Acompanhamento />} />
        <Route path='/Cadastros/Drink' element={<Drink />} />
        <Route path='/Cadastros/Entrada' element={<Entrada />} />
        <Route path='/Cadastros/Massa' element={<Massa />} />
        <Route path='/telalogin' element={<Login />} />
        <Route path='/Home1' element={<Home1 />} />

      </Routes>
    </Router>
  );
}

export default App;