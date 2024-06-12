//import React from 'react'
import {navigation} from "../utils/constant"
import { NavLink } from "react-router-dom"
const Navigate = () => {
  return (
    <div className='w-main h-[48px] py-2  text-sm flex items-center border'>
      {navigation.map((el) =>(
        <NavLink to={el.path} key={el.id} className={({isActive}) => isActive ? "pr-12 hover:text-main text-main text-lg" : "pr-12 hover:text-main text-lg"}>
            {el.value}
        </NavLink>
      ))}
    </div>
  )
}

export default Navigate