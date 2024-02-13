import { Box, Fab, Typography } from "@mui/material"
import PrimaryCard from "../../atom/PrimaryCard"
import { IconPencil } from "@tabler/icons-react"



const BooksPage = () => {
    return(
        <Box>
            <Box sx={{display:"flex", gap:2, justifyContent:"center"}}>
                <PrimaryCard title={"Life Style"} qty={17} subtitle={"The Sun Is Still Rising!!"} />
                <PrimaryCard title={"UI/UX Design"} qty={3} subtitle={"Simple And Usable Interaction!!"} />
                <PrimaryCard title={"Friday Books"} qty={7} subtitle={"Must Read Books On Friday"}/>
            </Box>         
            <Fab>
                <IconPencil />
            </Fab>
        </Box>
    )
}

export default BooksPage