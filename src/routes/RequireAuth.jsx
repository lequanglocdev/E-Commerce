import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import React from "react";
/**
 * Middleware kiểm tra đăng nhập.
 * Nếu chưa đăng nhập → chuyển hướng về trang chủ.
 * Nếu đã đăng nhập → cho phép vào admin route.
 */
export default function RequireAuth({ children }) {
  const isLoggedIn = useSelector((state) => state.user.loggedIn); // giả định state.user.loggedIn
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  // Đã đăng nhập → render nội dung bên trong
  return children;
}
