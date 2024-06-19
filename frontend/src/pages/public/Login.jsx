// import React from 'react'
import { useCallback, useState } from "react";
import { InputField, Button } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import path from "../../utils/path";
import {
  loginError,
  loginStart,
  loginSuccess,
} from "../../redux/user/userSlice";
const Login = () => {
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });
  const [email, setEmail] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);
  // const [forgotPassword,isForgotPassword] = useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error: errorMessage } = useSelector((state) => state.user);

  const handleSubmit = useCallback(async () => {
    if (!payload.email || !payload.password) {
      return dispatch(loginError("Không được để trống"));
    }
    try {
      dispatch(loginStart());
      const res = await fetch("/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.sucess) {
        dispatch(
          loginSuccess(Swal.fire("Congratulation", data.mes, "success"))
        );
        navigate(`/${path.HOME}`);
      } else {
        dispatch(loginError(Swal.fire("Error!", data.mes, "error")));
      }
      // console.log(data);
    } catch (error) {
      dispatch(loginError(errorMessage));
    }
  }, [payload]);

  const handleForgotPassword = async () => {
    if (!email) {
      Swal.fire("Error!", "Email cannot be empty", "error");
      return;
    }

    try {
      const res = await fetch(`/api/user/forgetPassword`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }), // Gửi dữ liệu dưới dạng đối tượng có thuộc tính email
      });

      const data = await res.json();
      if (data?.sucess) {
        Swal.fire("Please check your email", data.rs, "success");
      } else {
        Swal.fire("You failed to send email", data.rs, "error");
      }
    } catch (error) {
      console.error("Error occurred:", error);
      Swal.fire("Error!", "Something went wrong", "error");
    }
  };

  return (
    <div className="w-screen h-screen relative">
      {forgotPassword && (
        <div className="absolute top-0 animate-slide-right left-0 bottom-0 right-0 bg-main-500 bg-white y flex justify-center py-8 z-50">
          <div className="flex flex-col">
            <label htmlFor="email">Enter your email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[800px] pb-4 border-b outline-none placeholder:text-sm "
              placeholder="Ex: email@gmail.com"
            />
          </div>
          <div className="flex gap-4">
            <Button name="Back" handleOnclick={()=>setForgotPassword(false)} />
            <Button name="Submit" handleOnclick={handleForgotPassword} />
          </div>
        </div>
      )}
      <img
        src="https://img.pikbest.com/wp/202405/credit-card-online-digital-commerce-3d-render-illustration-of-phone-and-bags-for-shopping-icons_9835204.jpg!bw700"
        alt="ibg"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 bottom-0 left-0 right-0 items-center justify-center flex ">
        <div className="p-8 bg-white rounded-md min-w-[500px] z-20 ">
          <h1 className="text-[28px] font-semibold text-main text-center">
            Login
          </h1>

          <InputField
            value={payload.email}
            setValue={setPayload}
            nameKey="email"
          />
          <InputField
            value={payload.password}
            setValue={setPayload}
            nameKey="password"
            type="password"
          />
          <Button name={"Login"} handleOnclick={handleSubmit} />

          <div className="flex items-center justify-between w-full text-sm my-2">
            <span onClick={()=> setForgotPassword(true)} className="text-main hover:underline cursor-pointer p-2">
              Forgot your password
            </span>
            <Link to={`/register`}>
              <span className="text-main hover:underline cursor-pointer p-2">
                Create account
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
