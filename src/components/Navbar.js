import {useNavigate} from 'react-router-dom'
import useAuth from '../hooks/useAuth';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

function Navbar() {
  const {setAuth} = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth({}); 
    navigate('/');            
  }

    return (

      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button sx={{ my: 2, color: 'white', display: 'block' }}
              onClick={()=> navigate('/')}>Home</Button>
            </Box>
          </Typography>
          <Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button sx={{ my: 2, color: 'white', display: 'block' }}
              onClick={()=> navigate('/accounts')}>Cuentas</Button>
            </Box>
          </Typography>
          <Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button sx={{ my: 2, color: 'white', display: 'block' }}
              onClick={()=> navigate('/cards')}>Tarjetas</Button>
            </Box>
          </Typography>
          <Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button sx={{ my: 2, color: 'white', display: 'block' }}
              onClick={()=> navigate('/lines')}>Linea de crédito</Button>
            </Box>
          </Typography>

          <Box justifyContent="flex-end">
            <Button sx={{ my: 2, color: 'white', display: 'block'}}
              onClick={handleLogout}>Logout</Button>
          </Box>

        </Toolbar>
      </AppBar>
    </Box>


    );
  }
  
  export default Navbar;