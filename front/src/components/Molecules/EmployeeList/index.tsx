import { Typography, Grid } from "@mui/material";
import { EmployeeCard } from "../../Atoms";
function EmployeeList() {
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
            Состав управления
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              {/* Employee */}
              <EmployeeCard />
              {/* Employee */}
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
            Старшие преподы
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              {/* Employee */}
              <EmployeeCard />
              {/* Employee */}
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
            Лаборанты
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              {/* Employee */}
              <EmployeeCard />
              {/* Employee */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default EmployeeList;
