import { Grid, Paper, Box, Typography, Rating } from "@mui/material";

function SchoolHead() {
  return (
    <>
      <Grid
        container
        sx={{
          margin: "48px 0px 64px 0px",
        }}
      >
        <Grid item xs>
          <Paper
            sx={{
              padding: "32px 24px",
              boxShadow: "none",
              border: "1px solid #E3E3E3;",
              borderRadius: "8px",
            }}
          >
            <Box
              sx={{
                padding: "8px",
                background: "#27AE60",
                borderRadius: "32px",
                width: "fit-content",
                color: "#ffffff",
                marginBottom: "16px",
              }}
            >
              <Typography>👑 Топ - 1</Typography>
            </Box>
            <Typography
              variant="h6"
              sx={{
                marginBottom: "16px",
              }}
            >
              Школа-лицей N°101, физ - мат навправление
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography marginRight={"8px"}>Рейтинг/56789</Typography>
              <Rating name="read-only" value={2} readOnly />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default SchoolHead;
