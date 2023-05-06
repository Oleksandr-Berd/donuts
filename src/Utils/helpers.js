import axios from "axios";

export const getData = async (url, page) => {
   return await axios.get(`${url}?page=${page}&limit=1`)
}