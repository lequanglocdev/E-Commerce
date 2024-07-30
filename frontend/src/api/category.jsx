import axios from "../axios";

export const apiCategory = () => axios({
  url:'/category',
  method:"get"
})