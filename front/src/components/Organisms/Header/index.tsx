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
} from '@mui/material'
import { connect } from 'react-redux'
// import { Types } from '../../../store/types'
import { RootState } from '../../../store/reducers/rootReducer'
import { logout } from '../../../store/action/authAction'
import { Dispatch, bindActionCreators } from 'redux'

const mapStateToProps = (state: RootState) => ({
  loggedIn: state.auth.loggedIn,
})

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      logout,
    },
    dispatch,
  )
}
type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>
const pages = ['Главное']

const Header: React.FC<Props> = (props) => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  )

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
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
              <Typography variant="h5" sx={{ alignSelf: 'center' }}>
                SKCAR
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
                {pages.map((page) => (
                  <Button
                    key={page}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                ))}
                <Box
                  sx={{
                    alignSelf: 'center',
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
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">Профиль</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">Изменить</Typography>
                    </MenuItem>
                    {props?.loggedIn ? (
                      <MenuItem onClick={() => props?.logout()}>
                        <Typography textAlign="center">Выйти</Typography>
                      </MenuItem>
                    ) : (
                      <></>
                    )}
                  </Menu>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
