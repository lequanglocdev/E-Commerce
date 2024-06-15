import {useParams Navigate} from "react-router-dom"
import path from '../../utils/path'
const FainalRegister = () => {
  const {state} = useParams()
  return (
    <div>
      <Navigate to={`/${path.LOGIN}`} state={status} />
    </div>
  )
}

export default FainalRegister