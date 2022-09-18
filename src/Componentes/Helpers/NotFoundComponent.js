import React from 'react'
import { Route, Routes } from 'react-router-dom'

export const NotFoundComponent = () => {
    return (
        <Routes>
                        
             {/* RUTA PARA NOT FOUND */}
             <Route path='*' element ={<h4>Ups! Aún no hay nada aquí</h4>}/>
        </Routes>
        
    )
}