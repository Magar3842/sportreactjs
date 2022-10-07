import React from "react";

export const resetPassword = () => {

    const handleSubmit = (event) => {
        event.preventDefault()

        console.log(event)
    }

    return (
        <div className="container my-5">
            <h1>¿No recordás tu contraseña?</h1>
            <hr></hr>
<p>Te enviaremos un enlace para recuperarla. Escribí a continuación tu email y verificá tu bandeja de entrada.</p>
            <hr></hr>
            <hr></hr>
            <form onSubmit={handleSubmit}>
            <p>E-mail</p>
               <input 
                    type={'email'}
                    className='form-control my-2'
                    // onChange={}
                />
                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>
        </div>
    )
}