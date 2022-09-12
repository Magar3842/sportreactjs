import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import CartWidget from '../Cart/CartWidget';


function PublicNavBar () {
  return (
    <>
     <header className="bg-header">
            <div className="header-container">

                <Link to="/"><h1 className="header-title">DECOR-INSPIRE</h1></Link>

                <nav className="header-navigator">
                    <Link to='/Home' className="header-navlink">Home</Link>
                    <Link to='/contacto' className="header-navlink">Contacto</Link>
                    <Avatar src="/broken-image.jpg" />
                </nav>
                <CartWidget/>
            </div>

            {/* <div className='header-user'>
                <small>Bienvenido: {user.user}</small>
                <button onClick={logout} className='btn btn-outline-danger'>Logout</button>
            </div> */}
        </header>
         
    </>
  );
}

export default PublicNavBar;

