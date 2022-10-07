import { useState } from "react"
import { Navigate, Link } from "react-router-dom"
import { useCartContext } from "../Context/CartContext"
import { addDoc, collection, getDocs, writeBatch, query, where, documentId } from 'firebase/firestore'
import { db } from "../Services/configFirebase"
import { useForm } from "../Hooks/useForm"

const Checkout = () => {

    const { cart, cartTotal, terminarCompra } = useCartContext()

    const [orderId, setOrderId] = useState(null)

    const { values, handleInputChange } = useForm({
        nombre: '',
        email: '',
        direccion: '',
        telefono: '',
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        const orden = {
            comprador: values,
            items: cart,
            total: cartTotal()
        }
        

        if (values.nombre.length < 2) {
            alert("Nombre incorrecto")
            return
        }

        if (values.email.length < 2) { 
            alert("Email incorrecto")
            return 
        }

        const batch = writeBatch(db)
        const ordenesRef = collection(db, 'ordenes')
        const productosRef = collection(db, 'productos')
    
        const q = query(productosRef, where(documentId(), 'in', cart.map(item => item.id)))

        const productos = await getDocs(q)

        const outOfStock = []
            
        productos.docs.forEach((doc) => {
            const itemInCart = cart.find(item => item.id === doc.id)

            if (doc.data().stock >= itemInCart.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemInCart.cantidad
                })
            } else {
                outOfStock.push(itemInCart)
            }
        })

        if (outOfStock.length === 0) {
            batch.commit()
                .then(() => {
                    addDoc(ordenesRef, orden)
                        .then((doc) => {
                            console.log(doc.id)
                            // terminarCompraConSwal(doc.id)
                            setOrderId(doc.id)
                            terminarCompra()
                        })
                })
        } else {
            
            alert("Hay items sin stock")
            console.log(outOfStock)
        }

    }

    if (orderId) {
        return (
            <div className="container my-5">
                <h2>Genial! Gracias por tu compra:</h2>
                <hr/>
                <p>Te enviaremos un correo cuando tu pedido salga de nuestro deposito. Tu número de orden es: <strong>{orderId}</strong></p>
                <hr/>
                <Link to="/" className="py-8">
                <button className="btn btn-primary">Volver a la pagina</button>
            </Link>
                </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }

    return (
        <div className="container my-5">
            <h2>Completa tus datos</h2>
            <hr/>
            <p>Para poder confirmar la compra ingresa tus datos:</p>
            <hr/>
            <form onSubmit={handleSubmit}>
            <p>Dejanos tu nombre completo:</p>
                <input 
                    name="nombre"
                    onChange={handleInputChange}
                    value={values.nombre}
                    type={'text'} 
                    className="my-3 form-control" 
                    placeholder="Tu nombre"
                />
<p>Carga un Email para contactarte:</p>
                <input 
                    name="email"
                    onChange={handleInputChange}
                    value={values.email}
                    type={'email'} 
                    className="my-3 form-control" 
                    placeholder="E-mail"
                />
<p>Informa una domicilio de envio:</p>
                <input 
                    name="domicilio"
                    onChange={handleInputChange}
                    value={values.domicilio}
                    type={'text'} 
                    className="my-3 form-control" 
                    placeholder="Domicilio"
                />
<p>Dejanos un telefono de contacto:</p>
                <input 
                    name="telefono"
                    onChange={handleInputChange}
                    value={values.telefono}
                    type={'number'} 
                    className="my-3 form-control" 
                    placeholder="Numero de telefono"
                />
                <hr/>
                <Link to="/" className="py-8">
                <button className="btn btn-primary">Atras</button>
            </Link>
            <hr/>
            <button type="submit" className="btn btn-primary">Confirmar compra</button>
            </form>

        </div>
    )
}

export default Checkout

