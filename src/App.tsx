import { Global } from "@emotion/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { global } from "./assets/global/global";
import { reset } from "./assets/global/reset";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";

function App() {
  return (
    <BrowserRouter>
      <Global styles={global} />
      <Global styles={reset} />
     
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<main>info</main>} />
        </Routes>
     
    </BrowserRouter>
  );
}

export default App;
