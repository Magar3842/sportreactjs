import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        
        <div className="footer-container">
        
        <Link to="/" style={{color: 'white'}}>Inicio</Link>
        <br/>
        <br/>
        <Link to="/" style={{color: 'white'}}>Catalogo</Link>
        <br/>
        <br/>
        <Link to="/contacto" style={{color: 'white'}}>Contactanos</Link>
        <br/>
        <br/>  
        <p className="mr-1">© 2022 handmade with ♥️ by </p>
        <a href='https://github.com/Magar3842/sportreactjs.git'>Garcia, Macarena E.</a>
                              </div>
    )
}

export default Footer