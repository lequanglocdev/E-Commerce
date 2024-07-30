/* eslint-disable no-unused-vars */
import axios from "../axios";

// import axios from "../axios"
export const apiProduct = (data) => axios({
  url:"/product",
  method:"get",
  data
})
