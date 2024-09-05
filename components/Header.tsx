/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import Navbar from "./NavBar";
import { Box, Button, Typography, Container } from "@mui/material";
import React, { useEffect } from "react";
import { ThemeProvider } from "@mui/material";
import theme from "../app/theme";
import { usePathname, useRouter } from "next/navigation";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const path = usePathname();
  const pathName = path?.split("/")[2];
  console.log("pathName", pathName);
  const router = useRouter();
  const handleLogin = () => {
    console.log("Login");
  };

  const handleSignUp = () => {
    console.log("Sign Up");
  };

  return (
    <header className="p-4 bg-primary sticky top-0 z-50">
      <ThemeProvider theme={theme}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          color="white"
        >
          <Box>
            <Link href="/en/homepage">
              <Typography component="span" variant="h5">
                Tourism
              </Typography>
            </Link>
          </Box>
          <Container maxWidth="lg">
            <Box width="fit-content" position="relative" display="flex" gap={1}>
              <Button
                onClick={() => router.push("homepage")}
                variant="text"
                className={path === "homepage" ? ".Mui-focus" : ""}
              >
                Tourism
              </Button>
              <Button
                onClick={() => router.push("hotel")}
                variant="text"
                className={pathName === "hotel" ? "active" : ""}
              >
                Hotel
              </Button>
              <Button
                onClick={() => router.push("flight")}
                variant="text"
                className={path === "flight" ? "active" : ""}
              >
                Flight
              </Button>
              <Button
                onClick={() => router.push("blog")}
                variant="text"
                className={path === "blog" ? "active" : ""}
              >
                Blogs
              </Button>
              <Button
                onClick={() => router.push("contact")}
                variant="text"
                className={path === "contact" ? "active" : ""}
              >
                Contact Us
              </Button>
              <Button
                onClick={() => router.push("faq")}
                variant="text"
                className={path === "faq" ? "active" : ""}
              >
                FAQ
              </Button>
            </Box>
          </Container>
          <Box display="flex" gap={1} minWidth={160}>
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
              variant="contained"
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
