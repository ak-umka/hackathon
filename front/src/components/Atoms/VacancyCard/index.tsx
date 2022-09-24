import { Grid, Card, Typography } from "@mui/material";

interface vacancyCardProps {
  title: string;
  subTitle: string;
  handleClick?: any;
}

const defaultProps: vacancyCardProps = {
  title: "Препадователь",
  subTitle: "Матемтатика",
};

function VacancyCard(props: vacancyCardProps) {
  return (
    <>
      <Card
        sx={{
          padding: "16px",
          border: "1px solid #E3E3E3",
          borderRadius: "8px",
        }}
        elevation={0}
        onClick={props.handleClick}
      >
        <Grid container spacing={2}>
          <Grid item>
            <Typography sx={{ fontWeight: "700", marginBottom: "4px" }}>
              {props.title}
            </Typography>
            <Typography
              sx={{
                color: "#585353",
              }}
            >
              {props.subTitle}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}

VacancyCard.defaultProps = defaultProps;

export default VacancyCard;
