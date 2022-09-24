import { Grid, Card, Typography } from "@mui/material";

interface classCardProps {
  title: string;
  directions: string;
}

const defaultProps: classCardProps = {
  title: "11 A",
  directions: "Физ-Мат направление",
};

function ClassCard(props: classCardProps) {
  return (
    <>
      <Card
        sx={{
          padding: "16px",
          border: "1px solid #E3E3E3",
          borderRadius: "8px",
        }}
        elevation={0}
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
              {props.directions}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}

ClassCard.defaultProps = defaultProps;

export default ClassCard;
