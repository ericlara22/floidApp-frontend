import Account from './Account';
import useAuth from '../hooks/useAuth';

const AccountsView = () => {
    const {auth} = useAuth();
    const {accounts} = auth.products.data;
    return (
        <div>
            <h1>Cuentas</h1>
            <ul>
                {accounts.map( account => (
                <Account key={account.id} type={account.type} number={account.number} currency={account.currency} balance={account.balance}/>
                ))}
            </ul>
        </div>
    )
}

export default AccountsView