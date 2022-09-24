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

function SchoolCard() {
  const [ratingValue, setRatingValue] = React.useState<number | null>(2);

  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          sx={{
            minHeight: "220px",
            height: "220px",
            background: grey[300],
          }}
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
                Школа-лицей N°101
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
                Adress
              </Typography>
            </Grid>
            <Grid item>
              <Rating name="read-only" value={ratingValue} readOnly />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

export default SchoolCard;
