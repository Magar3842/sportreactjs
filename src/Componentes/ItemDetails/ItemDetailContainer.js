import { useEffect, useState } from "react"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetails/ItemDetail"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../Services/configFirebase"

const ItemDetailContainer = () => {

    const [item, setItem] = useState()
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams ()

        useEffect(() => {
            setLoading(true)

        // 1.- Armar la referencia (sync)
        const docRef = doc(db, 'productos', itemId)
        // 2.- Llamar a la DB (async)
        getDoc(docRef)
            .then((doc) => {
                setItem({id: doc.id, ...doc.data()})
            })
            .finally(() => {
                setLoading(false)
            })

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