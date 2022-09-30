import { css } from "@emotion/react";

export const global = css`
  @import url("https://fonts.googleapis.com/css2?family=VT323&display=swap");
  * {
    font-family: "VT323", monospace;
    color: white;
  }
  #root {
    height: 100vh;
    background-color: #4e369d; /*#051d39 */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7.5rem 3rem;
  }

  h1 {
    font-size: 4rem;
    line-height: 4rem;
    font-weight: 400;
  }

  h2 {
    font-size: 2rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.75);
  }
  p {
    font-size: 1.5rem;
    color: rgba(255, 255, 255, 0.5);
  }
`;
