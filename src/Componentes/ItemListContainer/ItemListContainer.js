import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import {pedirDatos} from "../Helpers/pedirDatos"

const ItemListContainer = () => {
const [productos, setProductos] = useState([])

    useEffect(() => {
        pedirDatos()
            .then( (res) => {
                setProductos(res)
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
                // console.log("Fin del proceso")
            })
    }, [])


    return (
        <div>
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer