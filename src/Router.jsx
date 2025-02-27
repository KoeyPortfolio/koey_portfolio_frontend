import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./page/NotFound";
import DefaultLayout from "./layout/DefaultLayout";
import Profile from "./page/Profile";
import Projects from "./page/Projects";
import Portfolios from "./page/Portfolios";
import Contact from "./page/Contact";

export default function Router() {
  return (
    <Routes>
      <Route path="*" element={<DefaultLayout />}>
        <Route path="" element={<Profile />} />
        <Route path="profile" element={<Profile />} />
        <Route path="projects" element={<Projects />} />
        <Route path="portfolios" element={<Portfolios />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}