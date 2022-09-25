import * as React from 'react'
import {
  AppBar,
  Container,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Tooltip,
  Avatar,
  Grid,

} from "@mui/material";
import { RootState } from "../../../store";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { logout } from "../../../store/action/authAction";
import { Link } from "react-router-dom";

const pages = [
  { title: "Главное", url: "/" },
  { title: "Вход", url: "/signin" },
  { title: "Регистрация", url: "/register" },
];
const authPages = [{ title: "Главное", url: "/" }];
const settings = ["Профиль", "Выйти"];

function Header(props: any) {

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  )

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  function userLogout() {
    props.logout();
  }

  return (
    <>
      <AppBar position="static">
        <Container fixed>
          <Grid container>
            <Grid
              item
              sx={{
                display: 'flex',
              }}
            >
              <Typography variant="h5" sx={{ alignSelf: "center" }}>
                SCKAR
              </Typography>
            </Grid>
            <Grid
              item
              xs
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              sx={{
                display: 'flex',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '8px',
                }}
              >

                {props.user.length !== 0 ? (
                  <>
                    {authPages.map((page, index) => (
                      <Link style={{ textDecoration: "none" }} to={page.url}>
                        <Button
                          sx={{ my: 2, color: "white", display: "block" }}
                        >
                          {page.title}{" "}
                        </Button>
                      </Link>
                    ))}
                    <Box
                      sx={{
                        alignSelf: "center",
                      }}
                    >
                      <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                          <Avatar
                            alt="Remy Sharp"
                            src="/static/images/avatar/2.jpg"
                          />
                        </IconButton>
                      </Tooltip>
                      <Menu
                        sx={{ mt: "45px" }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                      >
                        <MenuItem>
                          <Typography textAlign="center">Профиль</Typography>
                        </MenuItem>
                        <MenuItem onClick={userLogout}>
                          <Typography textAlign="center">Выйти</Typography>
                        </MenuItem>
                      </Menu>
                    </Box>
                  </>
                ) : (
                  <>
                    {pages.map((page, index) => (
                      <Link style={{ textDecoration: "none" }} to={page.url}>
                        <Button
                          key={index}
                          sx={{ my: 2, color: "white", display: "block" }}
                        >
                          {page.title}
                        </Button>
                      </Link>
                    ))}{" "}
                  </>
                )}

              </Box>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </>
  )
}


const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      logout: () => logout(),
    },
    dispatch
  );
};

const mapStateToProps = (state: RootState) => ({
  user: state.auth?.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

