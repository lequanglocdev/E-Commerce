import { Link } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
// import Swal from "sweetalert2";
import { logoutSuccess } from "../redux/user/userSlice";

const TopHeader = () => {
  const { current, isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log("cyren",current)
  return (
    <div className="h-[38px] w-[1446px] bg-main flex items-center justify-center">
      <div className="w-main flex items-center justify-between">
        <span className="text-sm text-white">
          ORDER ONLINE OR CALL US (+1800) 000 8808{" "}
        </span>
        {isLoggedIn ? (
          <div className="flex justify-center items-center gap-4">
            <span className="text-sm text-white">{`Xin chào ${current?.firstname} ${current?.lastname}`}</span>
            <span className="cursor-pointer">
              <IoMdLogOut
                onClick={() => dispatch(logoutSuccess())}
                className="text-xl text-white"
              />
            </span>
          </div>
        ) : (
          <Link to={`/Login`}>
            <span className="text-sm text-white">
              Sign In or Create Account
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default TopHeader;
