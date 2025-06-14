'use client'
// import useState from 'react'
import { AppBar, Button, IconButton, Stack, Toolbar, Typography }  from '@mui/material'
// import MenuIcon from "@mui/icons-material/Menu"


export default function Navbar() {
    // const [open, setOpen] = useState(false);

    return (
        <>

            <AppBar position='static' style={{width:'100%'}} sx={{with:'100%', padding:0, margin:0, bgcolor:'white', }} >
                <Toolbar>
                    {/* <IconButton onClick={() => setOpen(true)} color='black' size='large'> */}
                        {/* <MenuIcon /> */}
                        <Typography variant='h4' fontWeight={"100%"} sx={{ flexGrow: 0.5, paddingLeft: 2 , color:'black', fontWeight:100}}>ZYPHER</Typography>
                        <Typography variant='h6' sx={{ flexGrow: 0.5, paddingLeft: 2 , color:'black'}}>Plataforma</Typography>
                        <Typography variant='h6' sx={{ flexGrow: 0.5, paddingLeft: 2 , color:'black'}}>Empresa</Typography>
                        <Typography variant='h6' sx={{ flexGrow: 0.5, paddingLeft: 2 , color:'black'}}>Recurso</Typography>
                    {/* </IconButton> */}
                    <Stack sx={{ flexGrow: 5 }}>  <Button color='inherit' size='large' href='/'>JLYR SYSTEMS</Button></Stack>

                    <Button variant="contained" sx={{margin:1}}>
                        <Typography variant='h7' >Login</Typography>
                    </Button>
                    <Button variant="outlined" sx={{margin:1}}>
                        <Typography variant='h7' >sing in</Typography>
                    </Button>
                </Toolbar>

            </AppBar>
        
        </>

        
    )
}
