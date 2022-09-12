import { useEffect, useState } from "react"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useParams } from "react-router-dom";
import { pedirDatos } from "../Helpers/pedirDatos";
import ItemDetail from "../ItemDetails/ItemDetail"


const ItemDetailContainer = () => {

    const [item, setItem] = useState()
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams ()

        useEffect(() => {
            setLoading(true)

        pedirDatos()
        .then( (res) => {
            setItem( res.find((prod) => prod.id === Number(itemId)))
        })
        .catch( (error) => {
            console.log(error)
        })
        .finally (() => {
            setLoading(false)
        })
                      
        // setear el estado con un único producto

    }, [])

    return (
        <div className="item-detail-container">

        {
            loading? 
            <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
                           :
            <ItemDetail item={item}/> 
            } 
        </div>
    )
}

export default ItemDetailContainer