import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./page/NotFound";
import DefaultLayout from "./layout/DefaultLayout";
import Profile from "./page/Profile";
import Projects from "./page/Projects";
import Portfolios from "./page/Portfolios";
import Contact from "./page/Contact";
import ProjectDetailPage from "./page/ProjectDetailPage";

export default function Router() {
  return (
    <Routes>
      <Route path="*" element={<DefaultLayout />}>
        <Route path="" element={<Profile />} />
        <Route path="profile" element={<Profile />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:id" element={<ProjectDetailPage />} />
        {/* <Route path="portfolios" element={<Portfolios />} /> */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}