
const Account = ({key, type, number, currency, balance}) => {
    
    return (
        <section>
            <li key={key}>
                <p>Tipo de cuenta: {type}</p>
                <p>Numero: {number}</p>
                <p>Saldo: {balance} {currency}</p>
            </li>
        </section>
        
    )
}

export default Account;