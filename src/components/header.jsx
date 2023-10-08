import {
  AppBar,
  Box,
  Container,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Toolbar,
  Typography,
  Menu,
  Button,
} from "@mui/material";
import React from "react";
import logo from "../img/logo-wave.png";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "rgba(15, 17, 32, 1)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box /**TELA DE mobile */
            component={"section"}
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Box>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Logic Wave</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Nossos projetos</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Texto 3</Typography>
                </MenuItem>
              </Menu>
            </Box>
            <Box
              sx={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <a href="/">
                <img src={logo} alt="Logo da " style={{ width: "80px" }} />
              </a>
              <Typography
                variant="h6"
                component="a"
                href="/"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "sans-serif",
                  fontWeight: 700,
                  textDecoration: "none",
                  color: "rgba(255, 255, 255, 1)",
                }}
              >
                Logic Wave
              </Typography>
            </Box>
            <Box
              sx={{
                height: 50,
                width: 80,
                flexGrow: 0,
              }}
            >
              <FormControl
                fullWidth
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  borderRadius: 1,
                }}
              >
                <InputLabel>
                  <LanguageIcon color="white" />
                </InputLabel>
                <Select>
                  <MenuItem value={10}>English</MenuItem>
                  <MenuItem value={20}>PT-BR</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>

          <Box /**TELA DE PC */
            component={"section"}
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <a href="/">
                <img
                  src={logo}
                  alt="Logo da empresa"
                  style={{ width: "110px" }}
                />
              </a>
              <Typography
                variant="h6"
                component="a"
                href="/"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "sans-serif",
                  fontWeight: 700,
                  textDecoration: "none",
                  color: "rgba(255, 255, 255, 1)",
                }}
              >
                Logic Wave
              </Typography>
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button
                variant="text"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "sans-serif",
                  fontWeight: 400,
                  textDecoration: "none",
                  color: "rgba(255, 255, 255, 1)",
                }}
              >
                Logic Wave
              </Button>
              <Button
                variant="text"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "sans-serif",
                  fontWeight: 400,
                  textDecoration: "none",
                  color: "rgba(255, 255, 255, 1)",
                }}
              >
                Nossos projetos
              </Button>
              <Button
                variant="text"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "sans-serif",
                  fontWeight: 400,
                  textDecoration: "none",
                  color: "rgba(255, 255, 255, 1)",
                }}
              >
                Texto 3
              </Button>
            </Box>
            <Box
              sx={{
                width: 100,
                flexGrow: 0,
              }}
            >
              <FormControl
                fullWidth
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  borderRadius: 1,
                }}
              >
                <InputLabel>
                  <LanguageIcon color="white" />
                </InputLabel>
                <Select>
                  <MenuItem value={"English"}>English</MenuItem>
                  <MenuItem value={"PT-BR"}>PT-BR</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
