import { useEffect, useState } from "react"
import { pedirDatos } from "../Helpers/pedirDatos";
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {

    const [item, setItem] = useState()

    useEffect(() => {
        pedirDatos()
        .then( (res) => {
            setItem(res.find((prod) => prod.id === Number(item.id)));
        })
        .catch( (error) => {
            console.log(error)
        })
        // setear el estado con un único producto

    }, [])

    return (
        <div>
            { 
            //Componente de presentación
            <ItemDetail item={item}/> 
            }
        </div>
    )
}

export default ItemDetailContainer