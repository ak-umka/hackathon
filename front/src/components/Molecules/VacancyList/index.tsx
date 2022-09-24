import { Typography, Grid } from "@mui/material";
import React from "react";
import { BasciDialog, VacancyCard } from "../../Atoms";
function VacancyList() {
  const [vacancyDialog, setVacancyDialog] = React.useState(false);

  const openDialog = (): void => {
    setVacancyDialog(true);
    console.log("open");
  };

  const closeDialog = (): void => {
    setVacancyDialog(false);
  };
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
            Вакансии
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <VacancyCard handleClick={openDialog} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <BasciDialog open={vacancyDialog} closeDialog={closeDialog} />
    </>
  );
}

export default VacancyList;
