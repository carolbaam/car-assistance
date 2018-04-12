import React from 'react'
import AppBar from './AppBar';
import Form from './Form';
import Button from './Button';
import {Link} from 'react-router-dom';
import GoogleApiWrapper from './GoogleMaps'
;

const style = {
   width: '100%',
   height: '100%'
}

const Main = () => (
  <div className="App">
    <AppBar name='Car Assistance'/>
   <h1>Aquí va tu mapa y tu buscador</h1>
   <GoogleApiWrapper />
   <Link to={'/main'}><Button >Pide tu grúa</Button></Link>
    
  </div>
)

export default Main;