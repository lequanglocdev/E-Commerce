import { memo } from "react"


const Countdown = ({unit,number}) => {
  return (
    <div className="w-[30%] h-[60px] border flex justify-center items-center bg-gray-200 rounded-md">
      <span>{unit}</span>
      <span>{number}</span>
    </div>
  
  )
}

export default memo(Countdown)