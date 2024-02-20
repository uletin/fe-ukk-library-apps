import { Box } from "@mui/material"
import { listBooks } from "../../../../_mock/listBooks"
import PrimaryCard from "../../../atom/PrimaryCard"



const AdminReadBooksPage = () => {

    const books = listBooks

    return(
        <Box>
            {books.map((book) => (
               <PrimaryCard title={book.title} subtitle={book.subtitle} qty={book.qty} />
            ))}
        </Box>
    )
}

export default AdminReadBooksPage