import {useRef, useState, useEffect} from 'react';
import {Link, useNavigate, useLocation } from 'react-router-dom'
import useAuth from '../hooks/useAuth';
import axios from '../api/axios';

const LOGIN_URL = '/login';
const Login = () => {
    const {setAuth} = useAuth;
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

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
        <section>
            <p ref={errorRef} className={errorMsg ? "error" : "offscreen"} aria-live="assertive">{errorMsg}</p>
            <h1>Ingresa a tu banco</h1>
            
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Ingresa tu RUT</p>
                    <input 
                        type="text" 
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required   
                    />
                </label>
                <label>
                    <p>Contraseña</p>
                    <input 
                        type="password" 
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required   
                    />
                </label>
                <p>Recuerda usar tu clave de internet</p>
                <button>Continuar</button>
            </form>
        </section>
    )
}


export default Login;