import * as React from "react"
import { Link } from "react-router-dom"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import styled from "@emotion/styled"

export default function NavigationBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            App
          </Typography>
          <StyledLink to="/home">
            <Button color="inherit">Home</Button>
          </StyledLink>
          <StyledLink to="/about">
            <Button color="inherit">About</Button>
          </StyledLink>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`
