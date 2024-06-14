import { useCallback, useState } from "react";
import { InputField, Button } from "../../components";
import Swal from "sweetalert2"
import { Link, useNavigate } from "react-router-dom";
import path from "../../utils/path";
const Register = () => {
  const navigate = useNavigate();
  const [payload, setPayload] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    mobile:""
  });
  const handleSubmit = useCallback(async () => {
    // console.log(payload)

    const res = await fetch("/api/user/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    
    const data = await res.json();
    if(data.sucess){
        Swal.fire("Congratulation",data.mes,"success")
        navigate(`/${path.LOGIN}`)
    }else{
      Swal.fire("Error!",data.mes,"error")
    }
    console.log(data);
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
            Register
          </h1>
          <div className="flex justify-between items-center">
            <InputField
              value={payload.firstname}
              setValue={setPayload}
              nameKey="firstname"
            />
             <InputField
              value={payload.lastname}
              setValue={setPayload}
              nameKey="lastname"
            />
          </div>
          <InputField
            value={payload.email}
            setValue={setPayload}
            nameKey="email"
          />
           <InputField
            value={payload.mobile}
            setValue={setPayload}
            nameKey="mobile"
          />
          <InputField
            value={payload.password}
            setValue={setPayload}
            nameKey="password"
            type="password"
          />
          <Button name={"Register"} handleOnclick={handleSubmit} />
          <div className="flex items-center justify-center mt-4 w-full text-sm my-2">
            <Link to={`/login`}>
              <span className="text-main hover:underline cursor-pointer p-2">
                Go to login
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
