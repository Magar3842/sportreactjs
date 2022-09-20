import { useEffect, useState } from "react"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import {db} from '../Services/configFirebase'
import { collection, getDocs, query, where } from "firebase/firestore"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoriaId} = useParams ()


    useEffect(() => {
        setLoading(true)

//ACA USAMOS LA BD FIRESTORE, LA CONSUMIMOS POR ESO YA NO USAMOS PEDIR DATOS
// 1- ARMAMOS LA REFERENCIA (sync)

const productosRef = collection(db, 'productos')
const q = categoriaId
                    ? query(productosRef, where('categoria', '==', categoriaId) )
                    : productosRef

// 2- CONSUMIMOS ESA REFERENCIA  (async)

getDocs(q)
.then((resp)=> {
    const productosDB = resp.docs.map((doc) => ({id: doc.id, ...doc.data()}) ) 
    console.log(productosDB)

    setProductos(productosDB)
})
.finally(() => {
    setLoading(false)
})

    }, [categoriaId])


    return (
        <div>
         {
            loading? 
            <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
                           :
     <ItemList productos={productos}/>                   
            }        
    </div>     
    )
}

export default ItemListContainer