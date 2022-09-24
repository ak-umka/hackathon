import {
  Box,
  Button,
  Typography,
  Modal,
  Stack,
  Rating,
  TextField,
  Grid,
} from '@mui/material'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '400px',
  height: 433,
  bgcolor: 'background.paper',
  borderRadius: '4px',
  boxShadow:
    '0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12)',
  p: '24px',
  background: '#FFFFFF',
}

export default function ReviewBox() {
  return (
    <Box sx={style}>
      <Grid container spacing={12}>
        <Grid item>
          <Typography
            id="modal-modal-title"
            variant="h6"
            sx={{ fontWeight: '500' }}
          >
            Отзыв школе: Школа лицей 101
          </Typography>
          <Stack spacing={12}>
            <Rating
              name="rating"
              defaultValue={2.5}
              precision={0.5}
              sx={{ marginY: '32px' }}
            />
          </Stack>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: '32px' }}
          />
          <TextField
            id="outlined-basic"
            label="Ваши комментарии"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            sx={{ marginBottom: '32px' }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <Button variant="text" sx={{ color: '#08B558' }}>
          Отправить
        </Button>
        <Button variant="text">Oтменить</Button>
      </Grid>
    </Box>
  )
}
