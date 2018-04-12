import React from 'react'
import AppBar from './AppBar';
import Form from './Form';
import Button from './Button';
import {Link} from 'react-router-dom';

const Main = () => (
  <div className="App">
    <AppBar />
   <h1>Aquí va tu mapa y tu buscador</h1>
   <Link to={'/main'}><Button >Pide tu grúa</Button></Link>
    
  </div>
)

export default Main;