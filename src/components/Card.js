import Balance from './Balance';
import {Typography, Grid, Card, CardContent} from '@mui/material';

const CardData = ({type, number, name, CLP, USD}) => {


    return (

        <Grid>
            <Card style={{minWidth: "250px", boxSizing: "border-box", margin:"20px"}} >
        <CardContent >
            <Typography component="p" variant="h5" fontFamily="Times New Roman, Times, serif" fontWeight="bold">
                {name} {number}
            </Typography>
            <Typography component="p" variant="h6" fontFamily="Times New Roman, Times, serif">
                <p>Tarjeta de {type}</p>
            </Typography>
            {
                name === "MasterCard" 
                ? (<img className="cardImg" src="mastercard-logo.png" alt="mastercard-logo"/>)
                : <img className="cardImg" src="amex-logo.jpeg" alt="amex-logo"/>
            }
            <hr></hr>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Balance currency="CLP" total={CLP.total} used={CLP.used} available={CLP.available} />
                </Grid>
                <Grid item xs={6}>
                    <Balance currency="USD" total={USD.total} used={USD.used} available={USD.available} />
                </Grid>
            </Grid>


        </CardContent>
      </Card>  
        </Grid>

              
    )
}

export default CardData;