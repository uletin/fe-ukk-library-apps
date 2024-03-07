import { Box, Fab, Typography } from "@mui/material"
import PrimaryCard from "../../../atom/PrimaryCard"
import { IconPencil } from "@tabler/icons-react"
import { listBooks } from "../../../../_mock/listBooks"
import { useEffect, useState } from "react"
import axios from "axios"



const BooksPage = () => {

    const [books, setBooks] = useState([])
    const urlBooks = "http://localhost:1337/api/books"   

    useEffect(() => {
        const getBooks = async () => {
            try {
                const getData = await axios.get(urlBooks)
                setBooks(getData.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        getBooks()

    }, [])

    console.log(books)

    return(
        <Box>
            <Box sx={{display:"flex", gap:2, justifyContent:"center"}}>
                {books.map((book) => (
                    <PrimaryCard 
                        title={book.attributes.title} 
                        subtitle={book.attributes.subtitle} 
                        qty={book.attributes.qty} 
                        key={book.id} 
                    />
                ))}
            </Box>         
            <Fab>
                <IconPencil />
            </Fab>
        </Box>
    )
}

export default BooksPage