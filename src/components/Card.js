import Balance from './Balance';

const CardData = ({key, type, number, name, CLP, USD}) => {

    return (
        <section>
            <li key={key}>
                <p>Nombre de la Tarjeta: {name}</p>
                <p>Tipo: {type}</p>
                <p>Numero: {number}</p>
                <p>Cuenta en CLP: </p>
                <Balance total={CLP.total} used={CLP.used} available={CLP.available}/>
                <p>Cuenta en USD: </p>
                <Balance total={USD.total} used={USD.used} available={USD.available}/>
            </li>
        </section>
        
    )
}

export default CardData;