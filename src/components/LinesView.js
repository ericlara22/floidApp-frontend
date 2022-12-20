import Line from './Line';
import useAuth from '../hooks/useAuth';
import {Grid, Paper} from '@mui/material';

const LinesView = () => {
    const {auth} = useAuth();
    const {lines} = auth.products.data;


    return (
        <Grid padding="30px" margin="40px">
            <Paper elevation={4}>
                <h1 className='cardTitle'>Linea de crédito</h1>
                <Grid container direction="row" justifyContent="center" alignItems="center" paddingBottom={"50px"}>
                    {lines.map( line => (
                    <Line key={line.id} number={line.number} CLP={line.CLP}/>
                    ))}
                </Grid>
            </Paper>
        </Grid>
        
    )
}

export default LinesView;