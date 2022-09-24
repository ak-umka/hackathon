import { Grid, Card, Avatar, Typography } from "@mui/material";

interface employeeCardProps {
  avatar: string | any;
  fullName: string;
  jobTitle: string;
}

const defaultProps: employeeCardProps = {
  avatar: "",
  fullName: "Имя Фамилия",
  jobTitle: "Директор школы",
};

function EmployeeCard(props: employeeCardProps) {
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
            <Avatar
              src={props.avatar}
              sx={{
                width: "64px",
                height: "64px",
              }}
            />
          </Grid>
          <Grid item>
            <Typography sx={{ fontWeight: "700", marginBottom: "4px" }}>
              {props.fullName}
            </Typography>
            <Typography
              sx={{
                color: "#585353",
              }}
            >
              {props.jobTitle}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}

EmployeeCard.defaultProps = defaultProps;

export default EmployeeCard;
