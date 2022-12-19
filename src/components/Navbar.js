import {Link, useNavigate} from 'react-router-dom'
import useAuth from '../hooks/useAuth';

function Navbar() {
  const {setAuth} = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth({}); 
    navigate('/');            
  }

    return (
      <nav>
          <ul>
            <li>
              <Link to=''>Home</Link>
            </li>
            <li>
              <Link to='accounts'>Cuentas</Link>
            </li>
            <li>
              <Link to='cards'>Tarjetas</Link>
            </li>
            <li>
              <Link to='lines'>Linea de Crédito</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Salir</button>
            </li>
          </ul>

      </nav>
    );
  }
  
  export default Navbar;