import { useParams } from "react-router-dom"
const DetailProduct = () => {
    const {pid,title} = useParams()
    console.log(pid)
  return (
    <div>DetailProduct</div>
  )
}

export default DetailProduct