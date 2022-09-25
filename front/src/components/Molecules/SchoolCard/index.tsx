import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Rating,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import AddLocationIcon from "@mui/icons-material/AddLocation";

interface Props {
  ratingValue: number;
  name: string;
  address: string;
  image: string;
}

function SchoolCard(props: Props) {
  const [ratingValue, setRatingValue] = React.useState<number | null>(2);

  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            minHeight: "220px",
            height: "220px",
            background: grey[300],
          }}
          src={props.image}
        ></CardMedia>
        <CardContent sx={{}}>
          <Grid container sx={{ display: "flex", flexDirection: "column" }}>
            <Grid item>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  marginBottom: "8px",
                }}
              >
                {props.name}
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{
                  marginBottom: "8px",
                }}
              >
                <AddLocationIcon
                  sx={{
                    height: "16.67px",
                    fill: "#2979ff",
                  }}
                />
                {props.address}
              </Typography>
            </Grid>
            <Grid item>
              <Rating name="read-only" value={props.ratingValue} readOnly />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

export default SchoolCard;
