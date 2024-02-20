import { Box, Fab, Typography } from "@mui/material"
import PrimaryCard from "../../../atom/PrimaryCard"
import { IconPencil } from "@tabler/icons-react"
import { listBooks } from "../../../../_mock/listBooks"



const BooksPage = () => {

    console.log(listBooks)

    return(
        <Box>
            <Box sx={{display:"flex", gap:2, justifyContent:"center"}}>
                {listBooks.map((book) => (
                    <PrimaryCard title={book.title} subtitle={book.subtitle} qty={book.qty} key={book.id} />
                ))}
            </Box>         
            <Fab>
                <IconPencil />
            </Fab>
        </Box>
    )
}

export default BooksPage