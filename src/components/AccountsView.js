import Account from './Account';
import useAuth from '../hooks/useAuth';
import {Grid, Paper} from '@mui/material';

const AccountsView = () => {
    const {auth} = useAuth();
    const {accounts} = auth.products.data;
    return (

        <Grid padding="30px" margin="40px" minWidth={"650px"}>
            <Paper elevation={4}>
                    <h1 className='cardTitle'>Cuentas</h1>
                <Grid container direction="row" justifyContent="center" alignItems="center" paddingBottom={"50px"}>
                    {accounts.map( account => (
                    <Account key={account.id} type={account.type} number={account.number} currency={account.currency} balance={account.balance}/>
                    ))}
                </Grid>
            </Paper>
        </Grid>
    )
}

export default AccountsView