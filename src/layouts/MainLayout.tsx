import styled from "@emotion/styled";

export const MainLayout = styled.main`
border-radius: 4rem;
width: 100%;
height: 100%;
background-color: #051d39;
padding: 2.5rem 8rem;
max-width: 80rem;
display: grid;
grid-template-rows: 6rem auto;
grid-template-columns: 50% auto;
& nav {
  grid-column: span 2;
}
`;