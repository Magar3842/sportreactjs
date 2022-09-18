import { useContext } from 'react'
import {BiShoppingBag} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'


export const CartWidget = () => {

    const { cartQuantity, cart } = useContext(CartContext)

    return (
        <Link to="/cart" className={`widget ${cart.length > 0 ? 'widget-visible' :''}`}>
            <BiShoppingBag/>
            <span>{cartQuantity()}</span>
        </Link>
    )
}