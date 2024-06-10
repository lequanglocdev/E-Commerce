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
