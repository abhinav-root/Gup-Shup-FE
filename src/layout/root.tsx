import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}
