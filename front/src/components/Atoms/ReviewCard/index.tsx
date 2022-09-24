import { Grid, Card, Rating, Stack, Typography } from '@mui/material'

interface reviewCardProps {
  fullName: string
  date: string
  review: string
}

const defaultProps: reviewCardProps = {
  fullName: 'Имя Фамилия',
  date: '23.09.2022',
  review:
    'Главная задача школы-лицея — подготовка школьников для дальнейшего приобретения профильного высшего образования.',
}

function ReviewCard(props: reviewCardProps) {
  return (
    <>
      <Card
        sx={{
          padding: '16px',
          border: '1px solid #E3E3E3',
          borderRadius: '8px',
        }}
        elevation={0}
      >
        <Grid container spacing={2}>
          <Grid item>
            <Stack spacing={2}>
              <Rating
                name="rating"
                defaultValue={2.5}
                precision={0.5}
                sx={{ marginBottom: '16px' }}
              />
            </Stack>
            <Typography sx={{ fontWeight: '700' }}>{props.fullName}</Typography>
            <Typography sx={{ fontWeight: '400', marginBottom: '16px' }}>
              {props.date}
            </Typography>
            <Typography
              sx={{
                color: '##181818',
              }}
            >
              {props.review}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </>
  )
}

ReviewCard.defaultProps = defaultProps

export default ReviewCard
