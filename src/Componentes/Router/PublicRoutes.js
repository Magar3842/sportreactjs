import { Routes, Route, Navigate } from 'react-router-dom'
import LoguinScreen from '../Helpers/LoguinScreen'
//import RegisterScreen from '../Helpers/NoEncontrada'
import Footer from '../Footer/Footer'
import PublicNavBar from '../Navbar/PublicNavBar'

const PublicRoutes = () => {

    return (
        
        <>
            {/* ROUTER PUBLICO */}
         <PublicNavBar/>

        <Routes>
        <Route path='/loguin' element={<LoguinScreen/>}/>
        {/* <Route path='/register' element={<RegisterScreen/>}/> */}
        <Route path='*' element={<Navigate to="/loguin"/>}/>
        </Routes>
        <Footer/>
</>
        )
}

export default PublicRoutes