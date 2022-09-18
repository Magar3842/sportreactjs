import { Routes, Route, Navigate } from 'react-router-dom'
import {LoginScreen} from '../Helpers/LoginScreen'
//import {Register} from '../Helpers/Register'
import Footer from '../Footer/Footer'
import Hero from '../Hero/Hero'

export const PublicRoutes = () => {

    return (
        
        <>
            {/* ROUTER PUBLICO */}
        <Hero/>
        
        <Routes>
        <Route path='/login' element={<LoginScreen/>}/>
        {/* <Route path='/register' element={<Register/>}/>  */}
        <Route path='*' element={<Navigate to="/login"/>}/>
        </Routes>
        
        <Footer/>
          </>
        )
}