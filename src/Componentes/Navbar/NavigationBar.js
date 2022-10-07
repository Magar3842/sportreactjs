import { Link } from 'react-router-dom'
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
               
                <Button onClick={logout} variant="outline-success">Logout</Button>{' '}
            </div>    

                <nav className="header-navigator">
                    <Link to='/' className="header-navlink">Ver todos</Link>
                    <Link to='/productos/sillones' className="header-navlink">Sillones y Sillas</Link>
                    <Link to='/productos/mesas' className="header-navlink">Mesas</Link>
                    <Link to='/productos/iluminacion' className="header-navlink">Iluminacion</Link>
                    <Link to='/productos/arteyvarios' className="header-navlink">Arte y varios</Link>
                    <Link to='/Contacto' className="header-navlink">Contacto</Link>
                    <Link to='/Registro' className="header-navlink">Registro</Link>
                    <CartWidget/>
                    </nav>
                    </div>
               </header>
             </>
  )
}