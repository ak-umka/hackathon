import { Container } from "@mui/material";
import { SchoolHead, SchoolInfo } from "../../components/Organisms";

function School() {
  return (
    <>
      <Container fixed>
        <SchoolHead />
        <SchoolInfo />
      </Container>
    </>
  );
}

export default School;
