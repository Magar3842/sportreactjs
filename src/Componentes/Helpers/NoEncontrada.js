import React from 'react'
import { Link } from 'react-router-dom'

const NoEncontrada = () => {
    return (
        <div className="notfound-container">
            <h3 className="notfound-text">Ups! Aún no hay nada aquí </h3>
            <Link to="/" className="py-8">
                <button className="btn-primary">Vamos a ver!</button>
            </Link>
        </div>
    )
}

export default NoEncontrada