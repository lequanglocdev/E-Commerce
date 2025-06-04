import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/private/Dashboard/Dashboard";
import Users from "../pages/private/Users/Users";
import React from "react";
import RequireAuth from "./RequireAuth";
import PrivateLayout from "../components/Layouts/PrivateLayout/PrivateLayout";

export default function PrivateRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            <PrivateLayout>
              <Dashboard />
            </PrivateLayout>
          </RequireAuth>
        }
      />
      <Route
        path="users"
        element={
          <RequireAuth>
            <PrivateLayout>
              <Dashboard />
            </PrivateLayout>
          </RequireAuth>
        }
      />
    </Routes>
  );
}
