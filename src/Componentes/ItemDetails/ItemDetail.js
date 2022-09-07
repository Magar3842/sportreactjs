import { useState } from "react"
import Counter from "./Counter"
import Select from "./Select"


const ItemDetail = ({item}) => {

    const [cantidad, setCantidad] = useState(1)
    const [opciones, setOpciones] = useState(item.opciones[0].valor)
    

    const handleAgregar = () => {
        const itemToCart = {
            id: item.id,
            precio: item.precio,
            nombre: item.nombre,
            opciones,
            cantidad,
            
        }

        console.log(itemToCart)
        // console.log({
        //     ...item,
        //     cantidad
        // })
    }
      return (
        <div className="container my-5">
            <img src={item.img}/>
            <h3>{item.nombre}</h3>
            <p>{item.descripcion}</p>
            <p>{item.informacion}</p>
            <hr/>
            <Select options={item.opciones} onSelect={setOpciones}/>
            <hr/>
            <p>Categoria: {item.categoria}</p>
            <h4> $ {item.precio}</h4>

            
            <Counter 
                max={item.stock}
                counter={cantidad}
                setCounter={setCantidad}
                handleAgregar={handleAgregar}
            />

        </div>
    )
}

export default ItemDetail