import { BrowserRouter } from "react-router-dom"
import { useLoginContext } from "../Context/LoginContext"
import {PrivateRoutes} from "../Router/PrivateRoutes"
import {PublicRoutes} from "../Router/PublicRoutes"


export const AppRouter = () => {

    const {user} = useLoginContext()

    return (
        <BrowserRouter>
              {
            user.logged
                ? <PrivateRoutes/>
                : <PublicRoutes/>
            }
        </BrowserRouter>
    )
}

