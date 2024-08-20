/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
const Button = ({name,handleOnclick}) => {
  return (
    <div className="">
      <button className="text-white text-center bg-main text-lg outline-none w-full rounded-md p-2 mt-2 hover:bg-opacity-90" onClick={handleOnclick}>{name}</button>
    </div>
  )
}

export default Button