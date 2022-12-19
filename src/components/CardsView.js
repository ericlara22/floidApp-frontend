import Card from './Card';
import useAuth from '../hooks/useAuth';

const CardsView = () => {
    const {auth} = useAuth();
    const {cards} = auth.products.data;

    return (
        <section>
            <h1>Tarjetas</h1>
            <ul>
                {cards.map( card => (
                <Card key={card.id} type={card.type} number={card.number} name={card.name} CLP={card.CLP} USD={card.USD}/>
                ))}
            </ul>
        </section>
        
    )
}

export default CardsView;

