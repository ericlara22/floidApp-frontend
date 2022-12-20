import Card from './Card';
import useAuth from '../hooks/useAuth';
import {Grid} from '@mui/material';

const CardsView = () => {
    const {auth} = useAuth();
    const {cards} = auth.products.data;

    return (
        <>
            <div>
                <h1>Tarjetas</h1>
            </div>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                {cards.map( card => (
                <Card key={card.id} type={card.type} number={card.number} name={card.name} CLP={card.CLP} USD={card.USD}/>
                ))}
            </Grid>   
        </>     
    )
}

export default CardsView;

