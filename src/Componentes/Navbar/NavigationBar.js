import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'


function NavigationBar () {
  return (
    <>
<Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            {/* <img
              alt=""
              src=""
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '} */}
            DECOR-INSPIRE
          </Navbar.Brand>
          <Nav className="me-auto">
                    
                    <Link to='/Home' className="header-navlink">Home</Link>
                    <Link to='/productos/Sillones' className="header-navlink">Sillones y Sillas</Link>
                    <Link to='/productos/Mesas' className="header-navlink">Mesas</Link>
                    <Link to='/productos/Iluminacion' className="header-navlink">Iluminacion</Link>
                    <Link to='/productos/Arteyvarios' className="header-navlink">Arte y varios</Link>
                    <Link to='/contacto' className="header-navlink">Contacto</Link>

          </Nav> 
        </Container>
      </Navbar>
         
    </>
  );
}

export default NavigationBar;

