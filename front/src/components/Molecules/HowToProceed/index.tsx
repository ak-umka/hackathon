import { Grid, Typography } from "@mui/material";

const content = {
  title: "Перечень документов",
  description:
    "Копия свидетельства о рождении ребенка. \n\nФото 3х4 см. \n\nФорма № 063/у. \n\nФорма № 026/у-3. \n\nЗаключение ПМПК (при необходимости)",
};

function HowToProceed() {
  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <Typography
            variant="h4"
            sx={{ fontWeigth: 700, marginBottom: "24px" }}
          >
            {content.title}
          </Typography>
          <Typography sx={{ whiteSpace: "break-spaces" }}>
            {content.description}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default HowToProceed;
