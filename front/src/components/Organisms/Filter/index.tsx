import { Paper, Typography, Grid, Divider } from "@mui/material";
import { BasicAutocomplete } from "../../Molecules";

const filterOptions = ["По рейтингу", "По дате добавления"];

function Filter() {
  return (
    <>
      <Paper
        sx={{
          width: "100%",
          height: "200px",
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "16px",
          }}
        >
          <Grid item>
            <Typography
              sx={{
                marginBottom: "2px",
              }}
            >
              Сортировка
            </Typography>
            <Divider
              sx={{
                marginBottom: "8px",
              }}
            />
            <BasicAutocomplete options={filterOptions} />
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default Filter;
