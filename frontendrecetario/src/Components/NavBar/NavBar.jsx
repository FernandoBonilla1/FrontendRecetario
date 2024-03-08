import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';


export default function NavBar(){

    const buttonStyle = { color: 'white' };

    return(
        <Box style={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar className='headerColor' style={{justifyContent: 'center'}}>
                    <Button component={Link} to="/Almuerzos" style={buttonStyle}>Almuerzos</Button>
                    <Button component={Link} to="/Pasteles"  style={buttonStyle}>Pasteles</Button>

                    
                </Toolbar>
            </AppBar>
        </Box>
    );
}