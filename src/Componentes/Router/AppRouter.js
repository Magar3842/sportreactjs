import { BrowserRouter } from "react-router-dom"
import { useLoginContext } from "../Context/LoginContext"
import PrivateRoutes from "../Router/PivateRoutes"
import PublicRoutes from "../Router/PivateRoutes"




const AppRouter = () => {

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

export default AppRouter