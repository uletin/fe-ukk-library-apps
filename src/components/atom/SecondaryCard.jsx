import { Box, Typography } from "@mui/material"



const SecondaryCard = () => {
    return(
        <Box sx={{backgroundColor:"gray", display:"flex", gap:2, padding:"8px"}}>
            <Box>Gambar</Box>
            <Box sx={{width:"100%"}}> 
                <Typography variant="h5" sx={{fontWeight:"bold"}}>Life Style</Typography>
                <Typography>The Sun Is Still Rising!</Typography>
                <Typography variant="body1" sx={{fontWeight:"bold", textAlign:"right"}}>x1</Typography>
            </Box>
        </Box>
    )
}

export default SecondaryCard