import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/action/authAction'
import {Container, Grid, Typography} from "@mui/material"





function Home() {
  const dispatch = useDispatch()

  return (
    <>
      <Container maxWidth="sm">
      <Grid container>
        <Grid item xs={12} sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          height: '200px'
        }}>
           <Typography variant="h3" sx={{
            paddingBottom: "16px"
           }}>Title</Typography>
           <Typography>subtitle</Typography>
        </Grid>
  <Grid item xs={12}>
           
  </Grid>
</Grid>
      </Container>
    </>
  )
}
export default Home
