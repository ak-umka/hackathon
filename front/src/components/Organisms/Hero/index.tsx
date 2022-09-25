import React from 'react'
import { Grid, Typography, Box, Button } from '@mui/material'
import { AsyncAutocomplete } from '../../Molecules'

function Hero() {
  return (
    <Box
      sx={{
        margin: '80px 0px 56px 0px',
        background: 'linear-gradient(90deg, #00C6FB 0%, #005BEA 100%)',
        padding: '40px 0px',
        borderRadius: '16px',
      }}
    >
      <Grid
        container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <Grid item xs={12}>
          <Typography
            variant="h3"
            sx={{
              marginBottom: '56px',
              fontWeight: 800,
              color: '#ffffff',
              textAlign: 'center',
            }}
          >
            Школы Карагандинской области
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Box
            sx={{
              padding: '16px',
              backgroundColor: '#ffffff',
              borderRadius: '16px',
            }}
          >
            <AsyncAutocomplete />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Hero
