import { Box, Typography } from "@mui/material"
import { IconCircle } from "@tabler/icons-react"



const PrimaryCard = ({title, qty, subtitle, image}) => {
    return(
        <Box sx={{backgroundColor:"gray", display:"flex", width:"30%", padding:"10px", justifyContent:"space-between"}}>
            <Box sx={{display:"flex", gap:1}}>
                <Box>
                    <IconCircle />
                </Box>
                <Box>
                    <Typography variant="h5" sx={{fontWeight:"bold"}}>{title}</Typography>
                    <Typography>{qty} Books</Typography>
                    <Typography>{subtitle}</Typography>
                </Box>
            </Box>
            <Box>
                <Typography>Gambar!</Typography>
            </Box>
        </Box>
    )
}

export default PrimaryCard