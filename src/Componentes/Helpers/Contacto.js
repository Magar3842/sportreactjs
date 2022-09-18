export const Contacto = () => {

    const handleSubmit = (event) => {
        event.preventDefault()

        console.log(event)
    }

    return (
        <div className="container my-5">
            <h2>Dejanos tu mensaje</h2>
            <hr></hr>

            <form onSubmit={handleSubmit}>
                <input 
                    type={'text'}
                    className='form-control my-2'
                    // onChange={}
                />

                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>
            <br></br>
            <h2>Suscribete al Newsletter</h2>
            <hr></hr>
            <form onSubmit={handleSubmit}>
                <input 
                    type={'email'}
                    className='form-control my-2'
                    // onChange={}
                />

                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>
        </div>
    )
}