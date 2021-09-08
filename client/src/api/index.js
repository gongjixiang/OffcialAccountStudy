import axios from "axios";
console.log(process.env.BASE_URL);
export const getCode = () => {
  return axios.get("/code");
};
