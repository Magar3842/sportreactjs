import React from 'react'
import { Card, CardBody, CardFooter, CardText, CardTitle } from 'reactstrap'
import ItemCount from '../ItemCount/ItemCount';
import Button from 'react-bootstrap/Button';

const ItemCard = (props) => {

    const {nombre, informacion, img, precio, stock} = props;

    const addToCart = (count) => {
        console.log("Se añadió al carrito", count, nombre, precio*count)
    }
    return (
        <>
            <Card
                className="my-2"
                style={{
                    width: '18rem'
                }}
            >
                <img src={img} style={{height: "15rem", objectFit: "cover",}}/>
                <CardBody>
                   <CardTitle tag="h5">
                        {nombre}
                    </CardTitle>
                    <CardText className="mb-2 text-muted" tag="h6">
                        {informacion}
                    </CardText>
                    <ItemCount stock={stock} addToCart={addToCart}/>
                </CardBody>
                <CardFooter>
                <Button variant="primary">$ {precio}</Button>
                <hr></hr>
                <Button variant="primary">Stock Disponible {stock}</Button>
                </CardFooter>
               
            </Card>
        </>
    )
}

export default ItemCard