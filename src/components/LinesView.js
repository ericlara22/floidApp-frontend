import Line from './Line';
import useAuth from '../hooks/useAuth';
import {Grid} from '@mui/material';

const LinesView = () => {
    const {auth} = useAuth();
    const {lines} = auth.products.data;


    return (
        <>
            <div>
                <h1>Linea de crédito</h1>
            </div>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                {lines.map( line => (
                <Line key={line.id} number={line.number} CLP={line.CLP}/>
                ))}
            </Grid>
            
        </>
        
    )
}

export default LinesView;