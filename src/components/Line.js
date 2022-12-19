import Balance from './Balance';
const Line = ({key, number, CLP}) => {
    
    return (
        <section>
            <li key={key}>
                <p>Número de Cuenta: {number}</p>
                <p>Saldo:</p>
                <Balance total={CLP.total} used={CLP.used} available={CLP.available}/>
            </li>
        </section>
        
    )
}

export default Line;