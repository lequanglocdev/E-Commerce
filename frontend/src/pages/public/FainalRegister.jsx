import { useParams, useNavigate } from "react-router-dom";
import path from '../../utils/path';
import { useEffect } from "react";
import Swal from 'sweetalert2';

const FinalRegister = () => {
  const { status } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFinalRegister = async () => {
      try {
        if (status === 'failed') {
          Swal.fire("Error", 'Registration error', 'error').then(() => {
            navigate(`/${path.LOGIN}`);
          });
        } else if (status === 'success') {
          Swal.fire("Congratulations", 'Registration success', 'success').then(() => {
            navigate(`/${path.LOGIN}`);
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchFinalRegister(); // Call the function inside useEffect
  }, [status, navigate]); // Include status and navigate in dependencies array

  return (
    <div className="w-screen h-screen bg-main">
      {/* Content for your final register page, if any */}
    </div>
  );
};

export default FinalRegister;
