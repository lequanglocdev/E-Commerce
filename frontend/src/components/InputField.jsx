/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React from 'react'

const InputField = ({
  value,
  setValue,
  nameKey,
  type,
  invalidFields,
  setInvalidFields,
}) => {
  return (
    <div className="w-full relative">
      {value.trim() !== "" && <label className="absolute top-0 text-[10px] left-[8px] font-bold" htmlFor={nameKey}>{nameKey?.slice(0,1).toUpperCase() + nameKey?.slice(1)}</label>}
      <input 
      type= { type ||"text"}
      placeholder={nameKey.slice(0,1).toUpperCase() +nameKey.slice(1)}
      value={value}
      onChange={e => setValue(prev =>({...prev,[nameKey]:e.target.value.trim()}))}
      className="px-4 py-2 rounded-sm border w-full my-2 placeholder:text-sm placeholder:italic outline-none"
      />
    </div>
  );
};

export default InputField;
