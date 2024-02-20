import { Box, Fab } from "@mui/material"
import { listBooks } from "../../../../_mock/listBooks"
import PrimaryCard from "../../../atom/PrimaryCard"
import { IconPencil, IconTrashFilled } from "@tabler/icons-react"
import { useNavigate } from "react-router-dom"



const AdminReadBooksPage = () => {

    const books = listBooks
    const navigate = useNavigate()

    return(
        <Box sx={{position:"relative", display:"flex", gap:2, flexWrap:"wrap"}}>
            {books.map((book) => (
                <PrimaryCard title={book.title} subtitle={book.subtitle} qty={book.qty} />  
            ))}
            <Fab sx={{position:"fixed", bottom:30, right:30,}} onClick={() => navigate("/admin/create-book")}>
                <IconPencil />
            </Fab>
        </Box>
    )
}

export default AdminReadBooksPage