import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import './App.css'



//COMPONENTES
import Wellcome from './Componentes/Navbar/Wellcome';
import NavigationBar from './Componentes/Navbar/NavigationBar'
import ItemListContainer from './Componentes/ItemList/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetails/ItemDetailContainer';
import Contacto from './Componentes/Helpers/Contacto';
import NoEncontrada from './Componentes/Helpers/NoEncontrada';
import Footer from './Componentes/Footer/Footer';

 

function App() {

  return (
     
    <BrowserRouter>

    <Wellcome/> 
    <NavigationBar/>
  
  
    <Routes>
    <Route path='/' element={<ItemListContainer/>}/>
    <Route path='/productos/:categoriaId' element={<ItemListContainer/>}/> 
    <Route path='/item/:itemId' element={<ItemDetailContainer/>}/> 

    <Route path="/Contacto" element={<Contacto/>}/> 
    <Route path="*" element={<Navigate to="/"/>}/> 
    <Route path="/NoEncontrada" element={<NoEncontrada/>}/> 
    </Routes>

    <Footer/> 
    </BrowserRouter>
   
   
  );
}

export default App;