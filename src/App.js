import './App.css';
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
      <Route path="/" element={<Layout />} >
        <Route path="login" element={<Login />}/>
        <Route element={<RequireAuth />} >
          <Route path="products" element={<ProductsView />} />
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
