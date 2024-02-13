import { useRoutes } from "react-router-dom"
import LoginPage from "../../components/pages/LoginPage"
import RegistrationPage from "../../components/pages/RegistrationPage"
import BooksPage from "../../components/pages/BooksPage"


const UseRouter = () => {
    const router = useRoutes([
        {path:"/login", element:<LoginPage />},
        {path:"/registration", element:<RegistrationPage />},
        {path:"/books", element:<BooksPage />}
    ])

    return router
}

export default UseRouter