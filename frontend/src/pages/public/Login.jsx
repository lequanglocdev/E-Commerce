// import React from 'react'
import { useState } from "react";
import { InputField, Button } from "../../components";
import { Link ,useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginError, loginStart, loginSuccess } from "../../redux/user/userSlice";
const Login = () => {
  const [payload, setPayload] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(loginError("Không được để trống"));
    }
    try {
      dispatch(loginStart());
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      // console.log("data",data)
      if (data.success === false) {
        dispatch(loginError(data.message));
      }
      if (res.ok) {
        dispatch(loginSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(loginError(errorMessage));
    }
  };

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

          <form className="flex flex-col " onSubmit={handleSubmit}>
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
            <Button name={"Login"}  type="submit" />
          </form>
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
