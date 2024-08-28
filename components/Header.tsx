/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import Navbar from "./NavBar";
import { Box, Button, Typography, Container } from "@mui/material";
import React, { useEffect } from "react";
import { ThemeProvider } from "@mui/material";
import theme from "../app/theme";

const Header = () => {
  const handleLogin = () => {
    console.log("Login");
  };

  const handleSignUp = () => {
    console.log("Sign Up");
  };

  return (
    <header className="p-4 bg-primary">
      <ThemeProvider theme={theme}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          color="white"
        >
          <Box>
            <Link href="/">
              <Typography component="span" variant="h6">
                Tourism
              </Typography>
            </Link>
          </Box>
          <Container maxWidth="lg">
            <Box width="fit-content" position="relative">
              <Box display="flex" gap={3}>
                <Link href="hotel">Hotel</Link>
                <Link href="concert">Concerts</Link>
                <Link href="blog">Blogs</Link>
                <Link href="contact">Contact Us</Link>
                <Link href="faq">FAQ</Link>
              </Box>
            </Box>
          </Container>
          <Box display="flex" gap={1} minWidth={156}>
            <Button
              variant="contained"
              onClick={handleLogin}
              sx={{
                backgroundColor: "white",
                color: "secondary.main",
                "&:hover": {
                  backgroundColor: "secondary.main",
                  color: "white",
                },
              }}
            >
              Login
            </Button>
            <Button
              onClick={handleSignUp}
              sx={{
                backgroundColor: "white",
                color: "secondary.main",
                "&:hover": {
                  backgroundColor: "secondary.main",
                  color: "white",
                },
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </ThemeProvider>
    </header>
  );
};

export default Header;
