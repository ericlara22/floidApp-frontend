const Balance = ({key, total, used, available}) => {
    
    return (
        <section>
            <li key={key}>
                <p>Total: {total}</p>
                <p>Utilizado: {used}</p>
                <p>Disponible: {available}</p>
            </li>
        </section>
        
    )
}

export default Balance;