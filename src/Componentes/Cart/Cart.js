import { BsFillTrashFill } from 'react-icons/bs'
//import { useDarkMode } from '../Context/DarkModeContext'
import { useCartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'


const Cart = () => {

    const { cart, cartTotal, emptyCart, removeItem } = useCartContext()
    //const { darkMode } = useDarkMode()
    //console.log(darkMode)

    return (
       <>
       <div className="carrito-title">
 <h2>Shopping Bag</h2>
       </div>
          
             <div className="carrito-container">
            <hr/>

            { cart.map((item) => (
            //<CartItem key={} item={item}/>
                <div key={item.id}>
                
                    <h3>{item.nombre}</h3>
                    <p>Precio: ${item.precio}</p>
                    <p>Cantidad: {item.cantidad}</p>
                    <small>opciones: {item.opciones}</small>
                    <br/>
                    <button onClick={() => removeItem(item.id)} className="btn btn-danger mg-2"><BsFillTrashFill/></button>
                    <hr/>
                </div>
            ))}


            <h4>Total: ${cartTotal()}</h4>
            <br/>
            {/* <button className="btn btn-danger">Finalizar Compra</button> */}
            
            <div>
                        <Link to='/checkout'>
                            <button className="btn btn-danger">Check-Out</button>
                        </Link>
                        <br/>
                        <br/>
                        <button onClick={emptyCart} className="btn btn-danger">Vaciar carrito</button>
                    </div>
        </div>
        </>
    )
}

export default Cart