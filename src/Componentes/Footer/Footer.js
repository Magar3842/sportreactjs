import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        
        <div className="footer-container">
        
        <Link to="/" style={{color: 'white'}}>Inicio</Link>
        <Link to="/" style={{color: 'white'}}>Productos</Link>
        <Link to="/contacto" style={{color: 'white'}}>Contactanos</Link>
            
        <p className="mr-1">© 2022 handmade with ♥️ by </p>
        <a href='https://github.com/Magar3842/sportreactjs.git'>Garcia, Macarena E.</a>
                              </div>
    )
}

export default Footer