import {Typography, Grid} from '@mui/material';

const Balance = ({currency, total, used, available}) => {
    
    return (
        <>
            <Typography variant="h6" marginRight="5px" fontFamily="Times New Roman, Times, serif" paddingTop="10px">
                
                {currency}
            </Typography>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                <Grid item xs={6} alignItems="flex-start">
                    
                    <p className="smallText">Total: </p>
                    
                </Grid>
                <Grid item xs={6} alignItems="flex-end"> 
                    <div className="balance">
                            {total}
                    </div>          
                </Grid>
            </Grid>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                <Grid item xs={6} alignItems="flex-start">
                    <p className="smallText">Utilizado: </p>
                </Grid>
                <Grid item xs={6} alignItems="flex-end">
                <div className="balance">
                    {used}
                </div>
                </Grid>
            </Grid>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                <Grid item xs={6} alignItems="flex-start">
                    <p className="smallText">Disponible: </p>
                </Grid>
                <Grid item xs={6} alignItems="flex-end">
                    <div className="balance">
                        {available}
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default Balance;