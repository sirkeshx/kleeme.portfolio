import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Image from "next/image";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function Home() {
  return (
    <Container
      disableGutters
      maxWidth="md"
      component="main"
      sx={{ pt: 8, pb: 6 }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", pb: 3 }}>
        <Avatar
          alt="Hi, I am Kristopher Lee"
          sx={{ height: 200, width: 200 }}
          src="./profile-picture.png"
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="text.primary"
          sx={{ p: 1 }}
        >
          Hi, I am
        </Typography>
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="#2a2626"
          sx={{ textTransform: "capitalize", fontWeight: "bold", p: 1 }}
        >
          Kristopher Lee
        </Typography>
      </Box>
      <Typography
        component="h1"
        variant="h5"
        align="center"
        color="text.primary"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        Full Stack Developer
      </Typography>
      <Typography
        variant="h5"
        align="center"
        color="text.secondary"
        component="p"
      >
        I pride myself on my ability to translate complex technical concepts
        into practical solutions, making technology accessible to a wide
        audience. I am a proactive learner, staying updated with the latest
        industry trends and emerging technologies to ensure my skills remain at
        the forefront of the field.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", pt: 3 }}>
        <Stack spacing={2} direction="row">
          <Link href="/portfolio" style={{ textDecoration: "none" }}>
            <Button variant="contained">Portfolio</Button>
          </Link>
          <Link href="./CV2023.pdf" style={{ textDecoration: "none" }}>
            <Button variant="outlined">Download CV</Button>
          </Link>
        </Stack>
      </Box>
    </Container>
  );
}
