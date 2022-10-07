import { Link } from "react-router-dom"

export const Contacto = () => {

    const handleSubmit = (event) => {
        event.preventDefault()

        console.log(event)
    }

    return (
        <div className="container my-5">
            <h1>Contacto</h1>
            <br/>
            <br/>
<p>Comunicate con nosotros a través del siguiente formulario de contacto y te contestaremos a la brevedad.</p>

            <form onSubmit={handleSubmit}>
            <p>Descripcion</p>
                <input 
                    type={'text'}
                    className='form-control my-2'
                    style={{ height: '100px' }}
                    />
                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>
            <br/>
            <hr/>
            <br/>
            <form onSubmit={handleSubmit}>
            <p>Sucribete al Newsletter y recibe nuestras novedades y promociones</p>
                <input 
                    type={'email'}
                    className='form-control mb-3'
                    // onChange={}
                />
                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>
<br/>
           <Link to="/" className="py-8">
                <button className="btn btn-success">Volver al catalogo</button>
            </Link>
        </div>
    )
}