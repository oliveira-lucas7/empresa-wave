import { Box, Container, Typography } from "@mui/material";
import React from "react";
import logo from "../img/logo-wave.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <Container
      sx={{
        position: "static",
        padding: 2,
        backgroundColor: "rgba(15, 17, 32, 1)",
        minWidth: "100%",
        mt: 8,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
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
            width: 60,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <InstagramIcon sx={{ color: "white", fontSize: "2.5rem" }} />
          <WhatsAppIcon sx={{ color: "white", fontSize: "2.5rem" }} />
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
