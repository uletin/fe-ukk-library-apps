import { Box, Button, MenuItem, Select, Stack, TextField, Typography } from "@mui/material"

const AdminUpdateBooks = () => {
    return(
        <Box sx={{display:"flex", justifyContent:"center"}}>
          <Box sx={{width:"50%", height:"100vh", padding:"16px"}}>
            <Typography variant="h5" sx={{textAlign:"center", fontWeight:"bold"}}>Update Buku</Typography>
            <Stack sx={{gap:2, mt:"16px"}}>
              <TextField label="title" sx={{width:"100%"}} />
              <TextField label="subtitle" sx={{width:"100%"}} />
              <TextField label="qty" sx={{width:"100%"}} />
              <Button variant="contained" sx={{width:"100%"}}>Submit</Button>
            </Stack>
          </Box>
        </Box>
      )
}

export default AdminUpdateBooks