import { useCartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'


const Cart = () => {

    const { cart, cartTotal, emptyCart, removeItem } = useCartContext()
    
    // if (cart.length === 0) return <Navigate to="/"/>

    if (cart.length === 0) {
        return ( // <EmptyCart />
        // <Navigate to="/"/>
            <div className="container my-5">
                <h2>Tu carrito está vacío</h2>
                <hr/>
                <Link to="/" className="btn btn-primary">Ver productos...</Link>
            </div>
        )
    }

    return (
       
<div className='container my-5'>
    <h1> Shopping Bag</h1>
    <button onClick={() => emptyCart(cart)} className='btn btn-dark'>Vaciar shopping Bag</button>
    <hr/>
    {cart.map ((item) => (
    <div key={item.id} className='container my-5 '>
    <div className='row'>
        <div key={item.id} className='col-3 ' >
        <img src={item.img} style={{ width: '12rem' }} alt="" />
        </div>
        <div className='col-6 ' >
        <h4> {item.nombre} </h4>
        <h6>Envio Full</h6>
        <p>Opciones: {item.opciones}</p>
        <p>Cantidad: {item.cantidad}</p>
        </div>
        <div className='col-3 ' >
         <h5>Precio</h5>
         <h6>${item.precio}</h6>
         <br/>
         <br/>
         <br/>
         <button onClick={() => removeItem(item.id)} className='btn btn-dark'> eliminate</button>
        </div>
        <hr/>
    </div>
    </div>
))}
 <h4> Total: ${cartTotal()} </h4>
 <p>Hasta 6 cuotas sin interes</p>
             <button className="btn btn-dark">Finalizar Compra</button>
            <br/>
            <br/>
            <Link to='/checkout'><button className="btn btn-dark">Check-Out</button></Link>
            <br/>
            <br/>
            
</div>
)}

export default Cart       
