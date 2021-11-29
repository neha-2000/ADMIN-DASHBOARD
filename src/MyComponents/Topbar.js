import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { red } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Topbar() {
    return (
        <div>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row-reverse',
               
               
                
            }}>
                <AppBar position="fixed" variant="contained"  style={{backgroundColor:"blueviolet", color:"whitesmoke"}}>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Smaan
                        </Typography>
                        <Button color="inherit">Logout</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default Topbar
