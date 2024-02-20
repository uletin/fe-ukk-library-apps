import { Box, Button, TextField, Typography } from "@mui/material"

const RegistrationPage = () => {
    return(
        <Box>
            <Box sx={{display:"flex", justifyContent:"space-between", padding:"36px"}}>
                <Typography>Have a Team ?</Typography>
                <Typography>Already have account? Log In</Typography>
            </Box>
            <Box sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <Box sx={{display:"flex", flexDirection:"column", gap:3}}>
                    <Typography variant="h4" sx={{fontWeight:"bold"}}>Create Your Account</Typography>
                    <Typography>Welcome Alex,</Typography>
                    <Typography>You've been invited by Andrian ...</Typography>
                    <Box sx={{display:'flex', gap:2}}>
                        <TextField label="email address" />
                        <TextField label="fullname" />
                    </Box>
                    <TextField label='create password' type="password" sx={{width:"100%"}} />
                    <Typography variant="body2">We have policy ...</Typography>
                    <Button variant="contained" sx={{width:"100%"}}>Create Account</Button>
                </Box>  
            </Box>
        </Box>
    )
}

export default RegistrationPage