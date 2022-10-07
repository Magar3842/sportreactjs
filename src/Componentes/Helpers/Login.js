import React from 'react';  
import Button from 'react-bootstrap/Button';

export const Login = ({stateUser,setStateUser}) => {

    const {isLogged,isVerified} = stateUser

    const startSesion = () => {
        if(!isVerified){
            return alert ('Tienes que validar tu email primero')
        }
        setStateUser ({isLogged:true,isVerified:false,})
    }

    return (
        <div>
            <h2>Loguin</h2>
                        <Button variant="success" onClick={startSesion}>Iniciar Sesion</Button>{' '}
                                                         
            </div>
    )
}

