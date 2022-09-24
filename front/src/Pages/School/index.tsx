import { Container } from "@mui/material";
import {
  SchoolHead,
  SchoolInfo,
  SchoolDetail,
} from "../../components/Organisms";

function School() {
  return (
    <>
      <Container fixed>
        <SchoolHead />
        <SchoolInfo />
        <SchoolDetail />
      </Container>
    </>
  );
}

export default School;
