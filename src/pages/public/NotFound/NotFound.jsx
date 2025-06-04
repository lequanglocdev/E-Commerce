import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-9xl font-extrabold text-gray-400 tracking-widest">
        404
      </h1>
      <div className="bg-yellow-500 px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-2xl font-bold text-gray-700">
          Xin lỗi! Không tìm thấy trang bạn yêu cầu.
        </h2>
        <p className="mt-4 text-gray-500">
          Có thể đường dẫn sai hoặc trang đã bị xoá.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-2 text-white bg-black rounded hover:bg-gray-800 transition">
          Quay về trang chủ
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
