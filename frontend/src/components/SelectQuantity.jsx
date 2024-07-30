/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { memo } from "react"


const SelectQuantity = ({quantity,handleQuantity,handleChangeQuantity}) => {
  console.log(quantity)
  return (
    <div className="flex items-center">
       <h4 className="font-bold">Quantity:</h4>
      <span onClick={()=> handleChangeQuantity('remove')} className="text-[24px] p-2 border-r border-black cursor-pointer">-</span>
      <input className="py-2 px-4 w-10 outline-none " type="text" value={quantity} onChange={e => handleQuantity(e.target.value)} />
      <span onClick={()=> handleChangeQuantity('add')} className="text-[24px] p-2 border-l border-black cursor-pointer">+</span>
    </div>
  )
}

export default memo(SelectQuantity)