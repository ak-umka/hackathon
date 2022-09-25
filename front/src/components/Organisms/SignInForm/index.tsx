import { Button, Grid, TextField, Typography } from "@mui/material";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { signin } from "../../../store/action/authAction";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../store";
import React from "react";

function SignInForm(props: any) {
  const navigate = useNavigate();

  const userSignin = async (event: any) => {
    const data = {
      email: event.target[0].value,
      password: event.target[2].value,
    };
    try {
      props.signin(data);
    } catch (error) {
      console.log("error");
    }

    event.preventDefault();
  };

  React.useEffect(() => {
    if (props.user.length !== 0) {
      navigate("/");
    }
  }, [props.user]);

  return (
    <>
      <form onSubmit={userSignin}>
        <Grid
          container
          justifyContent="center"
          rowSpacing={4}
          sx={{ margin: "64px 0px" }}
        >
          <Grid
            item
            xs={6}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <Typography
              sx={{
                marginBottom: "8px",
              }}
            >
              Авторизация
            </Typography>
            <TextField
              name="email"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
              required
            />
            <TextField
              name="password"
              id="outlined-basic"
              label="Пароль"
              variant="outlined"
              type="password"
              required
            />
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Button variant="contained" type="submit">
              Вход
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      signin: (data) => signin(data),
    },
    dispatch
  );
};

const mapStateToProps = (state: RootState) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
