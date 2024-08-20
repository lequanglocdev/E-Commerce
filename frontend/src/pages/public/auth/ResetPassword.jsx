// import React from 'react'

import { useState } from "react";
import { Button } from "../../../components/templates";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const { token } = useParams();
  const handleResetPassword = async () => {
    try {
      const res = await fetch("/api/user/resetPassword", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, token }), // Gửi dữ liệu dưới dạng đối tượng có thuộc tính email
      });
      const data = await res.json();
      if (data?.sucess) {
        Swal.fire("Please check your email", data.rs, "success");
      } else {
        Swal.fire("You failed to send email", data.rs, "error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="absolute top-0 animate-slide-right left-0 bottom-0 right-0 bg-main-500 bg-white y flex justify-center py-8 z-50">
      <div className="flex flex-col">
        <label htmlFor="email">Enter your email</label>
        <input
          type="text"
          id="email"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-[800px] pb-4 border-b outline-none placeholder:text-sm "
          placeholder="Ex: email@gmail.com"
        />
      </div>
      <div className="flex gap-4">
        <Button name="Submit" handleOnclick={handleResetPassword} />
      </div>
    </div>
  );
};

export default ResetPassword;
