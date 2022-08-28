import React from 'react';
import { Alert } from 'reactstrap';

const Wellcome = (props) => {

    const {nombre} = props;

    return (
        <>
            <Alert color="primary">
               Hola {nombre}, Bienvenido a la tienda virtual de decoracion que te ayudara a inspirarte y vivir mejor.
            </Alert>
        </>

    )
}

export default Wellcome