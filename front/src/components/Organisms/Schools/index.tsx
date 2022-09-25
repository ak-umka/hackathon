import React from 'react'
import { Grid, Typography } from '@mui/material'
import { SchoolCard } from '../../Molecules'
import { connect } from 'react-redux'
import { getSchools, search } from '../../../store/action/schoolAction'
import { bindActionCreators, Dispatch } from 'redux'
import { RootState } from '../../../store/reducers/rootReducer'

const mapStateToProps = (state: RootState) => ({
  schools: state.school.school,
})

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      getSchools,
      search,
    },
    dispatch,
  )
}

interface CardValues {
  image: string
  address: string
  name: string
  ratings: {
    rating: number
  }
}

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

const Schools: React.FC<Props> = (props) => {
  const initialValue = 0

  React.useEffect(() => {
    props.getSchools()
  }, [])

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            sx={{
              marginBottom: '8px',
            }}
          >
            👑 Топ - 6 школ области
          </Typography>
          <Typography variant="h6">
            Рейтинг основан по результатам ЕНТ
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <SchoolCard
            ratingValue={10}
            name="qwert"
            address="qwertyu"
            image="gdyui"
          />
        </Grid>
        {/* <Grid item xs={4}>
          <SchoolCard />
        </Grid>
        <Grid item xs={4}>
          <SchoolCard />
        </Grid>
        <Grid item xs={4}>
          <SchoolCard />
        </Grid>
        <Grid item xs={4}>
          <SchoolCard />
        </Grid>
        <Grid item xs={4}>
          <SchoolCard />
        </Grid> */}
      </Grid>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Schools)
