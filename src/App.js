import 'bootstrap/dist/css/bootstrap.min.css';
//import {BrowserRouter} from 'react-router-dom';
import './App.css'
import { CartProvider } from './Componentes/Context/CartContext';
import { LoginProvider} from './Componentes/Context/LoginContext';
import {AppRouter} from './Componentes/Router/AppRouter';

 

export const App = () => {

 return (

      <LoginProvider>
      <CartProvider>
        <AppRouter/>
      </CartProvider>
    </LoginProvider>
    
  )

}