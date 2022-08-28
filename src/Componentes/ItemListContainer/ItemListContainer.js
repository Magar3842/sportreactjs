import { useEffect, useState } from "react"
import { Spinner } from 'reactstrap';
import ItemCard from "../ItemCard/ItemCard"

const Products = [
    {
        id: 1,
        nombre: 'Sillon 1 cuerpo',
        categoria: 'Sillones',
        precio: 65600,
        img: "./img/sillon 1 cuerpo amarillo.jpg",
        stock: 5,
        informacion: 'Sillon un cuerpo realizado en materiales nobles y de estilo moderno. Medidas 50cmx65cm'
    },
    {
        id: 2,
        nombre: 'Sillon 1 cuerpo',
        categoria: 'Sillones',
        precio: 95000,
        img: "./img/sillon 1 cuerpo blanco.jpg",
        stock: 3,
        informacion: 'Producto de estilo hecho en cuero blanco estilo ingles con formas torneadas que decoran cualquier ambiente. Medidas 50cmx50cm'
    },
    {
        id: 3,
        nombre: 'Sillon 1 cuerpo',
        categoria: 'Sillones',
        precio: 118500,
        img: "./img/sillon 1 cuerpo rojo.jpg",
        stock: 5,
        informacion: 'Sillon confortable realizado en tela y madela con terminaciones cuidadas y elegantes.'
    },
    {
        id: 4,
        nombre: 'Sillon 2 cuerpos',
        categoria: 'Sillones',
        precio: 148500,
        img: "./img/sillon 2 cuerpos marron.jpg",
        stock: 5,
        informacion: 'Sillon confortable realizado en tela con terminaciones cuidadas y elegantes y super confort.'
    },
    {
        id: 5,
        nombre: 'Sillon 3 cuerpos',
        categoria: 'Sillones',
        precio: 178500,
        img: "./img/sillon 3 cuerpos marron.jpg",
        stock: 5,
        informacion: 'Sillon confortable realizado en ecocuero con terminaciones cuidadas y elegantes.'
    },
    {
        id: 6,
        nombre: 'Juego de iluminacion techo',
        categoria: 'Iluminacion',
        precio: 48900,
        img: "./img/iluminacion techo 1.jpg",
        stock: 10,
        informacion: 'Un gran producto apto para todo ambiente. Juego de 3 lamparas colgantes.'
    },
    {
        id: 7,
        nombre: 'Juego de iluminacion techo',
        categoria: 'Iluminacion',
        precio: 36500,
        img: "./img/iluminacion techo 3.jpg",
        stock: 10,
        informacion: 'Producto de diseño moderno y buena iluminacion apto para living o salas de lectura'
    },
    {
        id: 8,
        nombre: 'Juego de iluminacion de techo',
        categoria: 'Iluminacion',
        precio: 7000,
        img: "./img/iluminacion techo 4.jpg",
        stock: 200,
        informacion: 'Un gran producto de estilo, pueden usarle solas y en conjunto para lograr mayor iluminacion y decoracion. Valor por unidad.'
    },
    {
        id: 9,
        nombre: 'Lampara de mesa',
        categoria: 'Iluminacion',
        precio: 27000,
        img: "./img/lampara de mesa 2.jpg",
        stock: 100,
        informacion: 'Buen diseño y calidad para acoger cualquier ambiente del hogar.'
    },
    {
        id: 10,
        nombre: 'Lampara de mesa',
        categoria: 'Iluminacion',
        precio: 17000,
        img: "./img/lampara de mesa 1.jpg",
        stock: 50,
        informacion: 'Producto de estilo moderlo que le dara un toque fresco y divertido a cualquier lugar donde se la ubique.'
    },
    {
        id: 11,
        nombre: 'Lampara de pie',
        categoria: 'Iluminacion',
        precio: 12500,
        img: "./img/lampara de pie 3.jpg",
        stock: 100,
        informacion: 'Producto con la sencillez y calidad propia para no pasar inadvertido.'
    },
    {
        id: 12,
        nombre: 'Pintura moderna',
        categoria: 'Arte',
        precio: 15000,
        img: "./img/pintura moderna 1.jpg",
        stock: 100,
        informacion: 'Juvenil y colorida para decorar un ambiente moderno.'
    },
    {
        id: 13,
        nombre: 'Pintura moderna',
        categoria: 'Arte',
        precio: 7300,
        img: "./img/pintura moderna 2.jpg",
        stock: 100,
        informacion: 'Colorida y freca para decorar un ambiente con estilo.'
    },
    {
        id: 14,
        nombre: 'Pintura moderna',
        categoria: 'Arte',
        precio: 25000,
        img: "./img/pintura moderna 4.jpg",
        stock: 100,
        informacion: 'Un ambiente moderno no puede no tener esta obra de arte de vanguardia.'
    },
    {
        id: 15,
        nombre: 'Mesa centro',
        categoria: 'Mesas',
        precio: 15000,
        img: "./img/mesa centro 1.jpg",
        stock: 30,
        informacion: 'Mesa de estilo delicado en madera y hierro combinable y discreta.'
    },
    {
        id: 16,
        nombre: 'Mesa centro',
        categoria: 'Mesas',
        precio: 25000,
        img: "./img/mesa centro 5.jpg",
        stock: 40,
        informacion: 'Mesa de estilo moderno y elegante en hierro y vidrio.'
    },
    {
        id: 17,
        nombre: 'Mesa centro',
        categoria: 'Mesas',
        precio: 12000,
        img: "./img/mesa centro 3.jpg",
        stock: 10,
        informacion: 'Original y de estilo combinable y reubicable.'
    },
]

const ItemListContainer = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = () => {
        const error = false;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(!error) {
                    resolve(Products)
                }else{
                    reject("Hubo un error")
                }
            }, 5000)
        }
            
        )
    }

    useEffect(() => {
        getData()
        .then(res => {
            setData(res);
            setLoading(false);
        })
        .catch(error => {
            setLoading(false);
            console.log(error)
        })
    }, [])

    return (
        <>
        
        {
            loading? 
                <Spinner
                    color="primary"
                    type="grow"
                ></Spinner>
                :
                <div className="row">
            
                    {
                        data.map((product) => (
                            <div className="col-4" key={product.id}>
                                <ItemCard nombre={product.name} descripcion={product.descripcion} img={product.img} precio={product.precio} stock={product.stock}/>
                            </div>
                        ))
                    }
                </div>
        }
        
        </>
        


        
    )
}

export default ItemListContainer