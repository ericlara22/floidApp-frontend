import Account from './Account';
import useAuth from '../hooks/useAuth';
import {Grid} from '@mui/material';

const AccountsView = () => {
    const {auth} = useAuth();
    const {accounts} = auth.products.data;
    return (
        <>
            <div>
                <h1>Cuentas</h1>
            </div>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                {accounts.map( account => (
                <Account key={account.id} type={account.type} number={account.number} currency={account.currency} balance={account.balance}/>
                ))}
            </Grid>
                
            
        </>
    )
}

export default AccountsView