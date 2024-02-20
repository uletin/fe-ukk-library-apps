import { Box, Button, TextField, Typography } from '@mui/material';
import { IconBox } from '@tabler/icons-react';


const LoginPage = () => {
    return(
        <Box sx={{display:"flex", height:"100vh", width:"100vw"}}>

      {/* section 1 */}
      <Box sx={{backgroundColor:"red", width:"50vw", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <IconBox size={200} color='white' />
      </Box>

      {/* section 2 */}
      <Box sx={{width:"50vw", padding:"32px"}}>
        <Typography variant='h6' sx={{fontWeight:"bold"}}>TYLET</Typography>
        <Box sx={{display:"flex", flexDirection:"column", gap:2, justifyContent:"center", height:"100%"}}>       
          <Typography variant='h5' sx={{fontWeight:"bold"}}>Log In</Typography>
          <Typography variant='body1' sx={{color:"gray"}}>Enter your email and password to login our dashboard</Typography>
          <TextField label="email" sx={{width:"100%"}}/>
          <TextField label="password" type='password' sx={{width:"100%"}} />
          <Button variant='contained' sx={{width:"100%"}}>Sign In</Button>
          <Box sx={{display:"flex", gap:2, alignItems:"center"}}>
            <Typography variant="caption">Don't have an account?</Typography>
            <Button>Sign Up</Button>
          </Box>
        </Box>
      </Box>
    </Box>
    )
}

export default LoginPage