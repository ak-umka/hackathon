import { Grid, Typography } from "@mui/material";
import { SchoolCard } from "../../Molecules";

function Schools() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            sx={{
              marginBottom: "8px",
            }}
          >
            👑 Топ - 6 школ области
          </Typography>
          <Typography variant="h6">
            Рейтинг основан по результатам ЕНТ
          </Typography>
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
        </Grid>
        <Grid item xs={4}>
          <SchoolCard />
        </Grid>
        <Grid item xs={4}>
          <SchoolCard />
        </Grid>
      </Grid>
    </>
  );
}

export default Schools;
