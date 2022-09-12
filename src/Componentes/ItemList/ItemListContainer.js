import { useEffect, useState } from "react"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {pedirDatos} from "../Helpers/pedirDatos"
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";




const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoriaId} = useParams ()


    useEffect(() => {
        setLoading(true)


        pedirDatos()
        .then( (res) => {
            if (!categoriaId) {
          setProductos(res)
           } else {
               setProductos( res.filter ((prod) => prod.categoria === categoriaId))
            }   
           
        })
        .catch( (error) => {
            console.log(error)
        })
        .finally (() => {
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