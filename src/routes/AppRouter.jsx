import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "../pages/public/NotFound/NotFound";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<PublicRoutes />} />
        <Route path="/admin/*" element={<PrivateRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
