import ItemListContainer from '../ItemList/ItemListContainer';
import ItemDetailContainer from '../ItemDetails/ItemDetailContainer';
import Contacto from '../Helpers/Contacto';
import Cart from '../Cart/Cart';
import { Routes, Route, Navigate } from 'react-router-dom'
import PrivateNavBar from '../Navbar/PrivateNavBar'
import NoEncontrada from '../Helpers/NoEncontrada'
import Footer from '../Footer/Footer' 
import LoguinScreen from '../Helpers/LoguinScreen';

const PrivateRoutes = () => {

    return (
        <>
            {/* ROUTER PRIVADO */}
                    
        <PrivateNavBar/>
        <Routes>
        <Route path='/loguinScreen' element={<LoguinScreen/>}/>
        </Routes>

        <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/productos/:categoriaId' element={<ItemListContainer/>}/> 
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/> 
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/Contacto' element={<Contacto/>}/> 
            <Route path='*' element={<Navigate to="/"/>}/> 
            <Route path='/NoEncontrada' element={<NoEncontrada/>}/> 
                    
        </Routes>
        <Footer/>
        </>
    )
}

export default PrivateRoutes