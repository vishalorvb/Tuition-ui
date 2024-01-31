import { Grid, Paper } from '@mui/material'
import React from 'react'

function FormPage({ children }) {
    const backgroundImageUrl = 'sample.jpg'
    return (
        <div>
            <Grid container justifyContent="center">
                <Grid item md={5} xs={0} sx={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: "cover", backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>


                </Grid>
                <Grid item md={5} xs={12}>

                    {children}


                </Grid>
            </Grid>
        </div>
    )
}

export default FormPage
