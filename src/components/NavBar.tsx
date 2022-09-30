import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";
// import { SearchIcon } from "../assets/icons/SearchIcon";
import { ThemeIcon } from "../assets/icons/ThemeIcon";

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & .start {
    display: flex;
    gap: 1rem;
    & h2 {
      color: white;
      font-size: 3.5rem;
    }
  }
  & .end {
  }
  & .navbar-menu {
    display: flex;
    font-size: 1.5rem;
    & li {
      padding: 1rem 2rem;
      color: white;
    }
    & li:hover,
    & li:focus {
      background-color: rgb(255, 255, 255);
      color: black;
      transform: translateY(-10%);
      transition: 0.35s all alternate;

      & a {
        color: black;
      }
    }
  }
`;

export const NavBar = () => {
  const path = useLocation().pathname;
  console.log(path);
  return (
    <StyledNavBar>
      <div className="start">
        {/* <SearchIcon /> */}
        <Link to="/">
          <h2>Sebs</h2>
        </Link>
      </div>
      <div className="end">
        <ul className="navbar-menu">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/projects">
            <li>Projects</li>
          </Link>
          <Link to="/about">
            <li>About me</li>
          </Link>
        </ul>
      </div>
    </StyledNavBar>
  );
};
