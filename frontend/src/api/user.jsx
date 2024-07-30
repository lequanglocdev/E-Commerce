/* eslint-disable no-unused-vars */
import axios from "../axios";

// import axios from "../axios"
export const apiLogin = (data) => axios({
  url:"/user/login",
  method:"post",
  data
})
export const apiLogout = () => axios({
  url:"/user/logout",
  method:"post",
})