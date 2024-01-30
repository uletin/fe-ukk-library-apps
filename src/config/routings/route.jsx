import { useRoutes } from "react-router-dom"
import LoginPage from "../../components/pages/LoginPage"
import RegistrationPage from "../../components/pages/RegistrationPage"


const UseRouter = () => {
    const router = useRoutes([
        {path:"/login", element:<LoginPage />},
        {path:"/registration", element:<RegistrationPage />}
    ])

    return router
}

export default UseRouter