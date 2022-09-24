import { Typography, Grid } from "@mui/material";
import { ClassCard } from "../../Atoms";
function ClassList() {
  return (
    <>
      <Grid container direction="column">
        <Grid
          item
          xs
          sx={{
            marginBottom: "64px",
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: "24px" }}>
            Старшие классы
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <ClassCard />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs
          sx={{
            marginBottom: "64px",
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: "24px" }}>
            Средние классы
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <ClassCard />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs
          sx={{
            marginBottom: "64px",
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: "24px" }}>
            Начальные классы
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <ClassCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default ClassList;
