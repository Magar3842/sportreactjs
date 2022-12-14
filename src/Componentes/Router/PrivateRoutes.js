import ItemListContainer from '../ItemList/ItemListContainer';
import ItemDetailContainer from '../ItemDetails/ItemDetailContainer';
import {Contacto} from '../Helpers/Contacto';
import Cart from '../Cart/Cart';
import { Routes, Route, Navigate } from 'react-router-dom'
import {NavigationBar} from '../Navbar/NavigationBar'
import NotFound from '../Helpers/NotFound'
import Footer from '../Footer/Footer' 
import {LoginScreen} from '../Helpers/LoginScreen';
import Checkout from '../Cart/Checkout'
import {Registro} from '../Helpers/Registro'

export const PrivateRoutes = () => {

    return (
        <>
            {/* ROUTER PRIVADO */}
                    
        <NavigationBar/>
        <Routes>
        <Route path='/loginScreen' element={<LoginScreen/>}/>
        </Routes>

        <Routes>
           
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/productos/:categoriaId' element={<ItemListContainer/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/> 
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/Contacto' element={<Contacto/>}/> 
            <Route path='/Checkout' element={ <Checkout /> }/>
            <Route path='/Registro' element={ <Registro/> }/> 
            <Route path='*' element={<Navigate to="/"/>}/> 
            <Route path='/NotFound' element={<NotFound/>}/> 
                    
        </Routes>
        <Footer/>
        </>
    )
}