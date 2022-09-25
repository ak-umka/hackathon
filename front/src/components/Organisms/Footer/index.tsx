import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";

function Footer() {
  return (
    <>
      <Box
        sx={{
          background: "#111111",
          color: "#ffffff",
        }}
      >
        <Container
          sx={{
            padding: "64px 0px",
            marginTop: "32px",
          }}
        >
          <Grid container>
            <Grid item xs={6}>
              <Typography>Контакты</Typography>
              <Typography>8 (777) 111 11 11</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>© 2020 - 2022 АО 'SCKAR'</Typography>
              <Typography>Все права защищены.</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Footer;
