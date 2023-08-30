import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import Link from "next/link";
import Button from "@mui/material/Button";

const defaultTheme = createTheme();

export default function Layout({ children }: any) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            <Link href="/" style={{ textDecoration: "none" }}>
              K.LEEME
            </Link>
          </Typography>
          <nav>
            <Link href="/" style={{ textDecoration: "none" }}>
              <Typography
                variant="button"
                color="primary"
                sx={{ my: 1, mx: 1.5 }}
              >
                Home
              </Typography>
            </Link>
            <Link href="/portfolio" style={{ textDecoration: "none" }}>
              <Typography
                variant="button"
                color="primary"
                sx={{ my: 1, mx: 1.5 }}
              >
                Portfolio
              </Typography>
            </Link>
            <Link href="./CV2023.pdf" style={{ textDecoration: "none" }}>
              <Button variant="outlined">Download CV</Button>
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
      <Container maxWidth="xl" component="main">
        {children}
      </Container>
    </ThemeProvider>
  );
}
