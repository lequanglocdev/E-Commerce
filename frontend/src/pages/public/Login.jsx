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
  return (
    <div className="w-screen h-screen relative">
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
            <span className="text-main hover:underline cursor-pointer p-2">
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
