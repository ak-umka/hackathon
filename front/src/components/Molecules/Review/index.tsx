import React from 'react'
import { Typography, Grid, Button } from '@mui/material'
import { BasicModal, ReviewCard, ReviewBox } from '../../Atoms'

function Review() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <>
      <Grid container direction="column">
        <Grid item xs>
          <BasicModal
            open={open}
            handleOpen={handleOpen}
            handleClose={handleClose}
            component={<ReviewBox />}
          />
          <Button
            variant="contained"
            sx={{ marginBottom: '24px' }}
            onClick={handleOpen}
          >
            Oставить отзыв
          </Button>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <ReviewCard />
            </Grid>
            <Grid item xs={12}>
              <ReviewCard />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs
          sx={{
            marginBottom: '64px',
          }}
        ></Grid>
      </Grid>
    </>
  )
}

export default Review
