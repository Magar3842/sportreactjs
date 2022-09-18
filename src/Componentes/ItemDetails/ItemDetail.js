import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../Context/CartContext"
import Counter from "./Counter"
import Select from "./Select"



const ItemDetail = ({item}) => {

    const { cart, addToCart, isInCart } = useCartContext()
    console.log(cart)

    const [cantidad, setCantidad] = useState(1)
    const [opciones, setOpciones] = useState(item.opciones[0].valor)
    

    const handleAgregar = () => {
        const itemToCart = {
            id: item.id,
            precio: item.precio,
            nombre: item.nombre,
            imagen: item.img,
            opciones,
            cantidad,
            
        }

        addToCart(itemToCart)

            }
      return (
        <div className="container my-5 grid">
        <hr/>
         <Link to="/" className="btn btn-dark">Volver al catalogo...</Link>
            <hr/>
            <div>
            <h1>Detalle del producto</h1>
            <hr/>
            <div className="container p-3">
                <div className="row">
                    <div className="col-sm-8">
                        {/* <div className="text-center"> */}
                        <img src={item.img} className="rounded mb-8 pt-4 shadow-md"/>
                        {/* </div> */}
                        <hr/>
                        <h2>Descripcion</h2>
                        <p>{item.informacion}</p>
                        <p>{item.descripcion}</p>
                        <Select options={item.opciones} onSelect={setOpciones}/>
                    </div>
                        <div>
                        <hr/>
                        <p>Nombre: {item.nombre}</p>
                        <h4>Precio: ${item.precio}</h4>
                        <hr/>
                        <p>Categoria: {item.categoria}</p>
                        </div>
                </div>
            </div>    
        </div>
              
            {
                isInCart(item.id)
                ?   <Link to="/cart" className="btn btn-dark my-2">Finalizar compra</Link>
                :   <Counter
                        max={item.stock}
                        counter={cantidad}
                        setCounter={setCantidad}
                        handleAgregar={handleAgregar}
                    />
            }
            <div>
               <Link to="/" className="btn btn-dark my-2">Agregar mas productos</Link> 
            </div>
            

        </div>
    )
}

export default ItemDetail