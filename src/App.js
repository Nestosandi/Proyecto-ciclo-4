import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './styles/App.css'
import Menu from './vistas/Menu'
import Login from './vistas/login'
import Register from './vistas/register'
import Index from './vistas/Landing'
import Mesas from './vistas/Mesas'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Index/>}/>
    <Route path="/menu" element={<Menu/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/mesas" element={<Mesas/>}/>
    </Routes>
    </Router>
  );
}

export default App;
