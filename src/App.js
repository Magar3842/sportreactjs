import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
//import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//COMPONENTES

import Wellcome from './Componentes/Wellcome/Wellcome';
import Navbar from './Componentes/Navbar/Navbar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import Item from './Componentes/Item/Item';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import ItemDetail from './Componentes/ItemDetail/ItemDetail';
import Footer from './Componentes/Footer/Footer';

function App() {

  return (
    
    <>
    <div className="App container mt-5">
    <Wellcome nombre="Estimado Cliente"/>
    <Navbar/>
    <ItemListContainer />
    <Item/>
    <ItemDetailContainer/>
    <ItemDetail/>
    <Footer/>
    </div> 
    </>  
     
  );
}

export default App;