import Balance from './Balance';
import {Typography, Card, CardContent, Grid} from '@mui/material';

const Line = ({number, CLP}) => {    
    return (
        <>
        <Grid minWidth={"100%"}>
            <Card style={{minWidth: "500px", boxSizing: "border-box", margin:"20px"}}>
                <CardContent >
                    <Typography component="p" variant="h5" fontFamily="Times New Roman, Times, serif" fontWeight="bold">
                        Numero de cuenta: {number}
                    </Typography>
                    <Balance total={CLP.total} used={CLP.used} available={CLP.available}/>
                </CardContent>
            </Card>
        </Grid>
        
            
        </>
        
    )
}

export default Line;