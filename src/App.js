import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import "./index.css";
import NavBar from "./components/nav-bar/nav-bar";
import Loader from "./components/loader/loader";
import Error404 from "./components/error/error";

const AboutPage = React.lazy(() => import("./pages/about-page/about-page"));
const HomePage = React.lazy(() => import("./pages/home-page/home-page"));
const ProjectsPage = React.lazy(() =>
  import("./pages/projects-page/projects-page")
);
const ResumePage = React.lazy(() => import("./pages/resume-page/resume-page"));
 
function App() {
  return (
    <>
      <NavBar />
      <div className="app">
        <Suspense fallback={<Loader />}>
          <Routes>   
            <Route exact path="/" element={<Navigate to={"/home"} />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
