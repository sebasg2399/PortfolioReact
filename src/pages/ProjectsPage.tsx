import styled from "@emotion/styled";
import { NavBar } from "../components/NavBar";
import { MainLayout } from "../layouts/MainLayout";

const Container = styled.div`
  padding: 2rem 0;
`;

export const ProjectsPage = () => {
  return (
    <MainLayout>
      <NavBar />
      <Container>
        <h1>My Projects</h1>
        <p>
          These are a few of the projects I have worked on, listed along with a
          short description of the project as well as the technologies and
          methodologies I have used and their respective repositories to see the code. Hope you like it :D
        </p>
      </Container>
    </MainLayout>
  );
};
