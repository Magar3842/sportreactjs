import { useContext, useState, Link} from "react"
import { LoginContext } from "../Context/LoginContext"

export const LoginScreen = () => {

    const {login, user} = useContext(LoginContext)
    console.log(user)

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePassChange = (e) => {
        setPass(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        login({
            email, pass
        })
    }

    return (
        <div className="sesion-container">
        <form onSubmit={handleSubmit} className="container py-5">
         <h3>Iniciar Sesion</h3>
            <p>Email de registro</p>
                <input 
                    type={'email'}
                    className='form-control my-2'
                    value={email}
                    onChange={handleEmailChange}
                />
                 <p>Contraseña</p>
                <input 
                    type={'password'}
                    className='form-control my-2'
                    value={pass}
                    onChange={handlePassChange}
                />
        
                <button className="btn btn-primary" type="submit">Iniciar sesion</button>
                <br/> 
                <br/> 
                </form>
        </div>
    )
}
