import * as React from "react";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";

import AdminNavigator from "../../components/Organisms/AdminNavigator";

function Admin() {
  return (
    <>
      <AdminNavigator />
      <Container >
        <Button variant="contained">Add School</Button>
      </Container>
    </>
  );
}

export default Admin;
