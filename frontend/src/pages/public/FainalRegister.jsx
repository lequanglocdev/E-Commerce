import {useParams,useNavigate} from "react-router-dom"
import path from '../../utils/path'
import { useEffect } from "react"
import Swal from 'sweetalert2'
const FainalRegister = () => {
  const {status} = useParams()
  const navigate = useNavigate()
  useEffect(() =>{
    if(status === 'failed') Swal.fire("Error",'Regiter error','error').then(()=>{
        navigate(`/${path.LOGIN}`)
    })
    if(status === 'success') Swal.fire("Congratuation",'Regiter success','success').then(()=>{
      navigate(`/${path.LOGIN}`)

    })
  })
  return (
    <div className="w-screen h-screen bg-main">
    </div>
  )
}

export default FainalRegister