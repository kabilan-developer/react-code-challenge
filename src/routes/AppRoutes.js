import React from "react";
import { Route, Routes } from "react-router-dom";
import HistoryPage from "../pages/history";
import HomePage from "../pages/home";
import LaunchesPage from "../pages/launches";
import RocketPage from "../pages/rockets";
import RocketDetails from "../pages/rockets/RocketDetails";
import LaunchesDetails from "../pages/launches/LaunchesDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/rockets" element={<RocketPage />} />
      <Route path="/rockets/:name" element={<RocketDetails />} />
      <Route path="/launches" element={<LaunchesPage />} />
      <Route path="/launches/:name" element={<LaunchesDetails />} />
    </Routes>
  );
};

export default AppRoutes;
