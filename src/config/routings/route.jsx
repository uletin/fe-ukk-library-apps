import { useRoutes } from "react-router-dom"
import LoginPage from "../../components/pages/anonymous/LoginPage"
import BooksPage from "../../components/pages/user/BooksPage"
import BucketPage from "../../components/pages/user/BucketPage"
import RegistrationPage from "../../components/pages/anonymous/RegistrationPage"
import AdminReadBooksPage from "../../components/pages/admin/ReadBooks"


const UseRouter = () => {
    const router = useRoutes([
        {path:"/login", element:<LoginPage />},
        {path:"/registration", element:<RegistrationPage />},
        {path:"/books", element:<BooksPage />},
        {path:"/bucket", element:<BucketPage />},
        {path:"/admin/list-books", element:<AdminReadBooksPage />},
    ])

    return router
}

export default UseRouter