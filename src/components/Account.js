import {Typography, Card, CardContent, Grid} from '@mui/material';

const Account = ({type, number, currency, balance}) => {
    
    return (
        <>

            <Card style={{minWidth: "500px", boxSizing: "border-box", margin:"20px"}}>
                <CardContent >
                    <Typography component="p" variant="h6" fontFamily="Times New Roman, Times, serif" fontWeight="bold">
                        <p>Cuenta {type}</p>
                    </Typography>
                    <Typography component="p" variant="h6" fontFamily="Times New Roman, Times, serif">
                        <p>N° Cuenta: {number}</p>
                    </Typography> 
                    <hr></hr>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                        <Grid item xs={6} alignItems="flex-end">
                            <div className="regText">Disponible: </div>
                        </Grid>
                        <Grid item xs={6} alignItems="flex-end">
                            {balance} {currency}
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

        </>
        
    )
}

export default Account;