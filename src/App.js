import './App.css';
import 'antd/dist/reset.css';
import Login from './components/LoginForm';
import ProductsView from './components/ProductsView';
import AccountsView from './components/AccountsView';
import CardsView from './components/CardsView';
import LinesView from './components/LinesView';
import Missing from './components/Missing';
import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';
import {Route, Routes} from 'react-router-dom';

function App() {
  
  return (
    <Routes>
        <Route path="login" element={<Login />}/>
        <Route path="/" element={<Layout />} >
        <Route element={<RequireAuth />} >
          <Route path="" element={<ProductsView />} />
          <Route path="accounts" element={<AccountsView />}/>
          <Route path="cards" element={<CardsView />}/>
          <Route path="lines" element={<LinesView />}/>
        </Route>
        <Route path="*" element={<Missing/>} />
      </Route>
    </Routes>
  );
}

export default App;
