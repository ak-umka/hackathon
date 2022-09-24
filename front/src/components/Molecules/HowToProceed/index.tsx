import { Grid, Typography } from "@mui/material";

const content = {
  title: "Описание",
  description:
    "Обязательный этап ребенка на пути к взрослой жизни — это получение образования. От выбора места обучения зависит будущий образовательный путь ребенка. \n\n Обязательный этап ребенка на пути к взрослой жизни — это получение образования. От выбора места обучения зависит будущий образовательный путь ребенка. \n\n Главная задача школы-лицея — подготовка школьников для дальнейшего приобретения профильного высшего образования.",
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
