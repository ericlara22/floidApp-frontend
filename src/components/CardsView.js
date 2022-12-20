import Card from './Card';
import useAuth from '../hooks/useAuth';
import {Grid, Paper} from '@mui/material';

const CardsView = () => {
    const {auth} = useAuth();
    const {cards} = auth.products.data;

    return (
        <Grid padding="30px" margin="40px">
            <Paper elevation={4}>
                    <h1 className='cardTitle'>Tarjetas</h1>        
                <Grid container direction="row" justifyContent="center" alignItems="center" paddingBottom={"50px"}>
                    {cards.map( card => (
                    <Card key={card.id} type={card.type} number={card.number} name={card.name} CLP={card.CLP} USD={card.USD}/>
                    ))}
                </Grid>   
            </Paper>
        </Grid>   
    )
}

export default CardsView;

