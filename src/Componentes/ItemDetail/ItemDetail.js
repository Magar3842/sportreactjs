const ItemDetail = ({item}) => {

    return (
        <div className="container my-5">
            <img src={item.img}/>
            <h3>{item.nombre}</h3>
            <h3>{item.id}</h3>
            <p>{item.descripcion}</p>
            <p>{item.categoria}</p>
            <h4>{item.precio}</h4>
        </div>
    )
}

export default ItemDetail