import { Link } from 'react-router-dom'
import {FaRegUser} from 'react-icons/fa'
import {CartWidget} from '../Cart/CartWidget';
import {useLoginContext} from '../Context/LoginContext'
import Button from 'react-bootstrap/Button';


export const NavigationBar = () => {

const {user, logout} = useLoginContext ()
    
return (
    <>
     <header className="bg-header">
            <div className="header-container">
                <h1 className='header-title'>DECO-INSPIRE</h1>
            <div className='nav-user'>
                <small>Bienvenido: {user.user}</small>
                {/* <button onClick={logout} className='btn btn-dark'>Logout</button> */}
                <Button onClick={logout} variant="outline-success">Logout</Button>{' '}
            </div>    

                <nav className="header-navigator">
                    <Link to='/' className="header-navlink">Ver todos</Link>
                    <Link to='/productos/Sillones' className="header-navlink">Sillones y Sillas</Link>
                    <Link to='/productos/Mesas' className="header-navlink">Mesas</Link>
                    <Link to='/productos/Iluminacion' className="header-navlink">Iluminacion</Link>
                    <Link to='/productos/Arteyvarios' className="header-navlink">Arte y varios</Link>
                    <Link to='/Contacto' className="header-navlink">Contacto</Link>
                    <Link to='/profile'className="header-navlink"><FaRegUser/>Perfil</Link>
                    </nav>
                <CartWidget/>
                </div>
             </header>
             </>
  )
}