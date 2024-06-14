import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
const TopHeader = () => {
  const { createUser } = useSelector((state) => state.user);
  console.log("createUser",createUser)
  return (
    <div className="h-[38px] w-[1446px] bg-main flex items-center justify-center">
      <div className="w-main  flex items-center justify-between">
        <span className="text-sm text-white">
          ORDER ONLINE OR CALL US (+1800) 000 8808{" "}
        </span>
        {createUser ? (
          <span className="text-sm text-white">{createUser.lastname}</span>
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
