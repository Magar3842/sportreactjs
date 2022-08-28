import React, { useState } from 'react'
import { Button } from 'reactstrap'

const ItemCount = ({stock, addToCart}) => {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        if(count < stock){
            setCount(count+1)
        }
    }

    const handleSubstract = () => {
        if(count > 0) {
            setCount(count-1)
        }
    }


  return (
    <div>
        <Button className='mx-2' onClick={handleSubstract}>
                  -
        </Button>
        <span>{ count }</span>
        <Button className='mx-2' onClick={handleAdd} >
            +
        </Button>
        <Button className='my-2' disabled={stock<=0} onClick={() => addToCart(count)}>Añadir al carrito</Button>
    </div>
  )
}

export default ItemCount