import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";

import memories from "./images/memoriesLogo.png";
import "./styles.css";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

export default function App() {
  return (
    <Container className="appBar" maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography className="heading" variant="h2" align="center">
          Memories
        </Typography>
        <img className="image" src={memories} alt="memories" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}
