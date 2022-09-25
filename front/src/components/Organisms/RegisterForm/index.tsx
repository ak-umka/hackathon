import { Button, Grid, TextField, Typography } from "@mui/material";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { signup } from "../../../store/action/authAction";
import { useNavigate } from "react-router-dom";
import React from "react";
import { RootState } from "../../../store";

function RegisterForm(props: any) {
  const navigate = useNavigate();
  const authrithation = async (event: any) => {
    const data = {
      firstname: event.target[0].value,
      lastname: event.target[2].value,
      email: event.target[4].value,
      password: event.target[6].value,
    };
    console.log(data);
    event.preventDefault();
    props.signup(data);
  };

  React.useEffect(() => {
    if (props.user.length !== 0) {
      navigate("/");
    }
  }, [props.user]);

  return (
    <>
      <form onSubmit={authrithation}>
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
              Регистрация
            </Typography>
            <TextField
              name="firstname"
              id="outlined-basic"
              label="Имя"
              variant="outlined"
              required
            />
            <TextField
              name="lastname"
              id="outlined-basic"
              label="Фамилия"
              variant="outlined"
              required
            />
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
              Регистрация
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
      signup: (data) => signup(data),
    },
    dispatch
  );
};

const mapStateToProps = (state: RootState) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
