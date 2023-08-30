import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { portfolioData } from "../api/data";
import Link from "next/link";

function truncate(source: any, size: any) {
  return source.length > size ? source.slice(0, size - 1) + "…" : source;
}
export default function Portfolio() {
  console.log("portfolioData", portfolioData);
  return (
    <Container
      disableGutters
      maxWidth="lg"
      component="main"
      sx={{ pt: 8, pb: 6 }}
    >
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
      >
        {portfolioData.map((data, key) => {
          return (
            <Card key={key} sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ background: data?.brandColor, objectFit: "contain" }}
                component="img"
                height="140"
                width="140"
                image={data?.thumbnail}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {data?.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {truncate(data?.summary, 100)}
                </Typography>
              </CardContent>
              <CardActions>
                <Link
                  href={data!.url}
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  <Button variant="outlined" size="small">
                    Visit Website
                  </Button>
                </Link>
              </CardActions>
            </Card>
          );
        })}
      </Stack>
    </Container>
  );
}
