import { Link } from "react-router-dom";

export const Home =() => {
    return (
          <>
            
         <div className="hero-container">
              
              <br/>
              <Link to='/auth/login'> Ir al Login</Link>
              <br/>
              <Link to='/app/homeApp'> Home DECO-INSPIRE</Link>
        
        </div>
     
         </>
    )
}