const Item = ( {producto} ) => {

    return (
    
        <div>
            <img src={producto.img}/>
            <h4>{producto.nombre}</h4>
            <p>Precio:${producto.precio}</p>
            <button className="btn btn-primary my-2">Ver más</button>
            <p>Stock disponible: {producto.stock}</p>
            </div>
        
    )
}

export default Item