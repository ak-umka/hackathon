import React from "react";
import { Grid, Paper, Box, Typography, Rating } from "@mui/material";
import { connect } from "react-redux";
import { RootState } from "../../../store/reducers/rootReducer";
import { getSchoolId } from "../../../store/action/schoolAction";
import { Dispatch, bindActionCreators } from "redux";
import { useParams } from "react-router-dom";

const mapStateToProps = (state: RootState) => ({
  school: state.school.school,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      getSchoolId,
    },
    dispatch
  );
};

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

type BoxProps = {
  name: string;
};

function SchoolHead(props: any) {
  let { id } = useParams();
  const school = props.school;

  React.useEffect(() => {
    props.getSchoolId(id);
    console.log(id);
  }, []);

  React.useEffect(() => {
    console.log(props.school);
  }, [props.school]);

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
              {props.school.name}
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

export default connect(mapStateToProps, mapDispatchToProps)(SchoolHead);
