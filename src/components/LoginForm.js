import {useRef, useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import useAuth from '../hooks/useAuth';
import axios from '../api/axios';
import './LoginForm.css';
import {Grid, Paper, TextField, Box, Button} from '@mui/material'


const LOGIN_URL = '/login';
const Login = () => {

    const paperStyle={padding:20, height:'70vh', width:400, margin:"20px auto"};

    const {setAuth} = useAuth();
    const navigate = useNavigate();

    const userRef = useRef();
    const errorRef = useRef();
    
    const [user, setUser] = useState();
    const [password, setPassword] = useState();
    const [errorMsg, setErrorMsg] = useState(); 

    useEffect( () => {
        userRef.current.focus();
    },[]);

    useEffect( () => {
        setErrorMsg('');
    },[user, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(LOGIN_URL, JSON.stringify( {id: user, password} ), {
                headers: {'content-type': 'application/json'},
            });
            const products = response?.data;
            console.log(products)
            setAuth({user, password, products}); 
            setUser('');
            setPassword('');
            navigate('/');            
        } catch (error) {
            console.log(errorMsg);
            if (error?.response){
                setErrorMsg(error.response.data.message)
            } else {
                setErrorMsg('No hay respuesta del servidor')
            }
            errorRef.current.focus()
        }
    }

    return (

        <Grid>

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
                    onChange={(e) => setUser(e.target.value)}
                    value={user}  />
                <TextField 
                    style={ {"marginTop":'40px'}}  
                    id="password" 
                    label="Ingresa tu contraseña" 
                    variant="filled"
                    type="password"
                    margin="normal"  
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    fullWidth
                    />
                </Box>
                <p>Recuerda usar tu clave de internet</p>
                <Button variant="contained" size="large" style={{padding:"18px", 'marginTop':"20px", 'fontSize': '18px', 'paddingLeft':"80px", 'paddingRight':"80px"}} onClick={handleSubmit}>Continuar</Button>

            </form>
            </Paper>
            <p ref={errorRef} className={errorMsg ? "error" : "offscreen"} aria-live="assertive">{errorMsg}</p>
            

        </Grid>

    )
}



            



export default Login;