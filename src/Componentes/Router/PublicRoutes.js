import { Routes, Route} from 'react-router-dom'
import {LoginScreen} from '../Helpers/LoginScreen'
import Footer from '../Footer/Footer'
import Hero from '../Hero/Hero'

export const PublicRoutes = () => {

    return (
        
        <>
            {/* ROUTER PUBLICO */}
        <Hero/>
        
        <Routes>
        
        <Route path='/login' element={<LoginScreen/>}/>
        </Routes>
        <LoginScreen/>
        <Footer/>
          </>
        )
}