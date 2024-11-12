import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "../pages/Landing";
import EventPage from "../pages/Event";
import Team from "../pages/WebTeam";

const Router = (props) => {
  return (
    <BrowserRouter basename="/act">
      <Routes>
        <Route path="/" element={<Navigate to="/trigger" />} />
        <Route path="/trigger" element={<LandingPage />} />
        <Route path="/trigger/event/:id" element={<EventPage />} />
        <Route path="/trigger/team" element={<Team />} />
        <Route path="*" element={<Navigate to="/trigger" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
