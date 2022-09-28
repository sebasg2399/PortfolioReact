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
`;
