import Line from './Line';
import useAuth from '../hooks/useAuth';

const LinesView = () => {
    const {auth} = useAuth();
    const {lines} = auth.products.data;


    return (
        <section>
            <h1>Linea de Crédito</h1>
            <ul>
                {lines.map( line => (
                <Line key={line.id} number={line.number} CLP={line.CLP}/>
                ))}
            </ul>
        </section>
        
    )
}

export default LinesView;