import styled from "@emotion/styled"
import { AppBar, MenuList, Toolbar, Typography } from "@mui/material"


const NavBar = () => {

  const StyledToolbar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "space-evenly"
  }))

  return (
    <>
      <AppBar position="absolute">
        <StyledToolbar>
          <MenuList><Typography sx={{ color: (theme) => theme.palette.primary.contrastText, cursor: "pointer" }} align="center"> About</Typography></MenuList>
          <MenuList><Typography sx={{ color: (theme) => theme.palette.primary.contrastText, cursor: "pointer" }} align="center">Skills</Typography></MenuList>
          <MenuList><Typography sx={{ color: (theme) => theme.palette.primary.contrastText, cursor: "pointer" }} align="center">Projects</Typography></MenuList>
        </StyledToolbar>
      </AppBar>
    </>
  )
}

export default NavBar
