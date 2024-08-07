/* eslint-disable no-useless-escape */
/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

export const createSlug = (string) =>
  string
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(" ")
    .join("-");

export const fixMoney = (number) => {
  const roundedNumber = parseFloat(number)?.toFixed(1); // Làm tròn số với một chữ số thập phân
  return parseFloat(roundedNumber).toLocaleString(); // Định dạng lại số theo định dạng tiền tệ
};

export const renderStarFromNumber = (number) => {
  if (!Number(number)) return;
  const stars = [];
  for (let i = 0; i < +number; i++) stars.push(<AiFillStar  color="orange" />);
  for (let i = 5; i > +number; i--) stars.push(<AiOutlineStar color="orange" />);
};

export function secondsTime(d) {
  d = Number(d) /1000
  const h = Math.floor(d/3600);
  const m = Math.floor(d % 3600 / 60)
  const s = Math.floor(d % 3600 % 60)
  return ({h,m,s})
}

export const validate = (payload,setInvalidFields) =>{
  let invalids = 0
  const formatPayload = Object.entries(payload)
  for(let arr of formatPayload){
    if(arr[1].trim() === "") {
      invalids ++
      setInvalidFields(prev =>[...prev,{name: arr[0],mes:"Require this field"}])
    }
  }
  for(let arr of formatPayload){
    switch(arr[0]){
      // case "email":
      //   const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      //   if(arr[1].match(regexEmail)){
      //     invalids ++
      //     setInvalidFields(prev =>[...prev, {name: arr[0],mes:"Email invalid"}])
      //   }
      //   break;
      case "password":
      if(arr[1].length < 6){
        invalids++
        setInvalidFields(prev =>[...prev,{name: arr[0],mes:"Password minimum 6 characters"}])
      }
      break;
      default:
      break;
    }
  }
  return invalids
}