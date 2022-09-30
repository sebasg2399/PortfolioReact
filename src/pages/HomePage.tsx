import { NavBar } from "../components/NavBar";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiCss3,
  SiGit,
  SiMongodb,
  SiPostgresql,
  SiRuby,
  SiRubyonrails,
  SiTypescript,
} from "react-icons/si";
import Final from "./finalalt.png";
import { MainLayout } from "../layouts/MainLayout";
const StyledArticle = styled.article`
  padding: 2rem 0;
 
  & .control {
    display: flex;
    gap: 3rem;
    padding: 1rem 0;
  }
  & .techs {
    padding: 2rem 0;
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    & svg {
      font-size: 2.5rem;
    }
  }
`;
const StyledLink = styled(Link)`
  color: black;
  padding: 0.5rem 1.5rem;
  font-size: 1.5rem;
  background-color: white;
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  & img {
    width: 30rem;
  }
`;
export const HomePage = () => {
  return (
    <MainLayout>
      <NavBar />
      <StyledArticle>
        <h1>Sebastian G.</h1>
        <h2>Full Stack Web Developer Jr.</h2>
        <p>
          This page is about me and projects that i've made. Currently i'm open
          to job offers! :D.
        </p>
        <div className="control">
          <StyledLink to="/projects">Projects</StyledLink>
          <StyledLink to="/">Contact</StyledLink>
        </div>
        <div className="techs">
          <FaGithub />
          <SiGit />
          <SiMongodb />
          <SiPostgresql />
          <FaPython />
          <SiRubyonrails />
          <SiRuby />
          <FaHtml5 />
          <SiCss3 />
          <FaJsSquare />
          <SiTypescript />
          <FaReact />
        </div>
      </StyledArticle>
      <ImageWrapper>
        <img src={Final} alt="" />
      </ImageWrapper>
    </MainLayout>
  );
};
