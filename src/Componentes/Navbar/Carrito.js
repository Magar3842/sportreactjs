import React from 'react'
import CartIcon from '../Navbar/shopping-bag-svgrepo-com2.svg'


export const CartWidget = () => {
    return (
        <div>
            <img src={CartIcon} alt="cart_icon" width='32' />    
        </div>
    )
}