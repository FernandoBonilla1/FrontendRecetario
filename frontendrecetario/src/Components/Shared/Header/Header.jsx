import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


import './Header.css'
import Logo from '../../../Assets/LunaLogo.ico';
import SearchBar from '../SearchBar/SearchBar';
import NavBar from '../../NavBar/NavBar';



export default function Header(){

    //const [auth, setAuth] = useState(false);

    return(
        <Box style={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar className='headerColor' sx={{ justifyContent: 'space-between' }}>
                    <Box style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={Logo} className="HeaderLuna-logo" alt="logo" />
                        <Typography className='Typography' variant="h5" component="div" sx={{ ml: 1 }}>
                            Recetario
                        </Typography>
                    </Box>

                    <SearchBar className="SearchBar" />

                    <Box style={{ display: 'flex' }}>
                        <Button className="ButtonLogin" style={{ color: 'white' }}>
                            Iniciar Sesión
                        </Button>     
                    </Box>
                </Toolbar>
            </AppBar>

            <NavBar/>
        </Box>
    )
}
