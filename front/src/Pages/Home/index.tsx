import * as React from "react";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/action/authAction";
import { Container, Grid } from "@mui/material";
import { Filter, Hero, Schools } from "../../components/Organisms";

function Home() {
  const dispatch = useDispatch();

  return (
    <>
      <Container fixed>
        <Hero />
        <Schools />
      </Container>
    </>
  );
}
export default Home;
