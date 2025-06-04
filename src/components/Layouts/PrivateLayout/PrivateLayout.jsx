import React from "react";

export default function PrivateLayout({ children }) {
  return (
    <div>
      {/* Có thể thêm sidebar, navbar riêng cho admin */}
      <h2>Private Admin Layout</h2>
      <main>{children}</main>
    </div>
  );
}
