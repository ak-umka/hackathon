import { Grid, Paper, Typography, CardMedia } from "@mui/material";

const schoolInfo = {
  title: "Описание",
  description:
    "Обязательный этап ребенка на пути к взрослой жизни — это получение образования. От выбора места обучения зависит будущий образовательный путь ребенка. \n\n В школе-лицее № 101 детей встретят внимательные учителя, которые серьезно и терпеливо занимаются своим делом. \n\nГлавная задача школы-лицея — подготовка школьников для дальнейшего приобретения профильного высшего образования.",
};

function SchoolInfo() {
  return (
    <>
      <Paper
        sx={{
          border: "1px solid #E3E3E3",
          borderRadius: "8px",
          boxShadow: "none",
          padding: "32px 24px",
          marginBottom: "64px",
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={5}>
            <CardMedia
              sx={{
                background: "#bdbdbd",
                height: "300px",
                borderRadius: "8px",
              }}
            />
          </Grid>
          <Grid item xs>
            <Typography
              variant="h5"
              sx={{ fontWeight: "700", marginBottom: "24px" }}
            >
              {schoolInfo.title}
            </Typography>
            <Typography
              sx={{
                whiteSpace: "pre-line",
              }}
            >
              {schoolInfo.description}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default SchoolInfo;
