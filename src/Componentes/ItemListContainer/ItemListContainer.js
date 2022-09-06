import { useEffect, useState } from "react"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {pedirDatos} from "../Helpers/pedirDatos"
import ItemList from "../ItemList/ItemList";


const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        pedirDatos()
        .then( (res) => {
            setProductos(res);
            setLoading(false);
        })
        .catch( (error) => {
            setLoading(false);
            console.log(error)
        })
    }, [])


    return (
        <>
         {
            loading? 
            <Box sx={{ display: 'center' }}>
      <CircularProgress />
    </Box>
                           :
                <div className="row">
                 <ItemList productos={productos}/>                   
                </div>
        }        
        </>       
    )
}

export default ItemListContainer