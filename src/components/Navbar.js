import {useNavigate} from 'react-router-dom'
import useAuth from '../hooks/useAuth';
import {AppBar, Box, Toolbar, Typography, Button, IconButton, Grid} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

function Navbar() {
  const {setAuth} = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth({}); 
    navigate('/');            
  }

    return (

      <Box sx={{ flexGrow: 1 }} display="block" width="100%">
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

          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={2}>
                
              <Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  <Button sx={{ my: 2, color: 'white', display: 'block' }}
                  onClick={()=> navigate('/')}>
                  <HomeIcon fontSize='large'/>
                  </Button>
                </Box>
              </Typography>



              </Grid>
              <Grid item xs={2} marginTop="10px">
                <Typography>
                  <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    <Button sx={{ my: 2, color: 'white', display: 'block' }}
                    onClick={()=> navigate('/accounts')}>Cuentas</Button>
                  </Box>
                </Typography>
              </Grid>

              <Grid item xs={2} marginTop="10px">
              <Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button sx={{ my: 2, color: 'white', display: 'block' }}
              onClick={()=> navigate('/cards')}>Tarjetas</Button>
            </Box>
          </Typography>
              </Grid>

              <Grid item xs={2} marginTop="10px">
              <Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button sx={{ my: 2, color: 'white', display: 'block' }}
              onClick={()=> navigate('/lines')}>Linea de crédito</Button>
            </Box>
          </Typography>
              </Grid>

              <Grid item xs={2}>

              </Grid>


              <Grid item xs={2} alignContent="right" marginTop="10px">
              <Box justifyContent="flex-end" alignContent={"right"}>
            <Button sx={{ my: 2, color: 'white', display: 'block'}}
              onClick={handleLogout}>Logout</Button>
          </Box>
              </Grid>

              
          </Grid>




            





          
          
          
          

          

        </Toolbar>
      </AppBar>
    </Box>


    );
  }
  
  export default Navbar;