import {useRef, useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import useAuth from '../hooks/useAuth';
import axios from '../api/axios';
import './LoginForm.css';
import {Grid, Paper, TextField, Box, Button, Modal, Typography} from '@mui/material'
import LockIcon from '@mui/icons-material/Lock';
import { useRut } from "../hooks/useRut";


const LOGIN_URL = '/login';
const Login = () => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    const paperStyle={padding:20, height:'70vh', width:400, margin:"20px auto", minHeight:"700px"};

    const {setAuth} = useAuth();
    const navigate = useNavigate();

    const userRef = useRef();
    //const errorRef = useRef();
    
    const [user, setUser] = useState('');
    const [password, setPassword] = useState();
    const [errorMsg, setErrorMsg] = useState(); 
    const [openModal, setOpenModal] = useState(false);
    const { rut, updateRut, isValid } = useRut();

    useEffect( () => {
        userRef.current.focus();
    },[]);

    useEffect( () => {
        setErrorMsg('');
    },[user, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(LOGIN_URL, JSON.stringify( {id: rut.raw, password} ), {
                headers: {'content-type': 'application/json'},
            });
            const products = response?.data;
            setAuth({user, password, products}); 
            setUser('');
            setPassword('');
            navigate('/');

        } catch (error) {
            if (error?.response){
                setErrorMsg(error.response.data.message)
            } else {
                setErrorMsg('No hay respuesta del servidor')
            }
            setOpenModal(true)
        }

    }

    return (

        <Grid marginTop="100px">
            <Paper elevation={10} style={paperStyle}>
                <form onSubmit={handleSubmit} className="login-form">
                    <h1 className="form-title">Ingresa a tu banco</h1>
                    <img src="Santander-logo.png" alt="Santander logo"/>
                    <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                        <TextField
                            style={ {"marginTop":'30px'}}  
                            fullWidth
                            type="text" 
                            label="Ingresa tu RUT"
                            id="userId"
                            variant="filled"
                            size="normal"
                            margin="normal"
                            ref={userRef}
                            autoComplete="off"
                            color={!isValid ? "warning" : "primary"}
                            onChange={(e) => {
                                updateRut(e.target.value)       
                                setUser(rut.raw)
                                }}
                            value={rut.formatted}    
                            />
                        {user !== '' && <div>
                            {!isValid && <span>RUT inválido</span>}
                        </div>
                        }
                        <TextField 
                            style={ {"marginTop":'40px'}}  
                            id="password" 
                            label="Ingresa tu contraseña" 
                            variant="filled"
                            type="password"
                            margin="normal"  
                            onChange={(e) => {
                                setPassword(e.target.value) 
                                }}
                            value={password}
                            fullWidth
                            />
                    </Box>
                    <p> <LockIcon fontSize='small' /> Recuerda usar tu clave de internet</p>
                    <Button variant="contained" size="large" style={{padding:"18px", 'marginTop':"20px", 'fontSize': '18px', 'paddingLeft':"80px", 'paddingRight':"80px"}} onClick={handleSubmit}>Continuar</Button>

                </form>
                <Box paddingTop="100px">
                    <img className="mainLogo center" src="floid-logo.jpeg" alt="floid-logo"/>
                </Box>
            </Paper>

            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                    Error
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {errorMsg}
                    </Typography>
                </Box>
            </Modal>        

        </Grid>

    )
}



            



export default Login;