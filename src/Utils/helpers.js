import axios from "axios";

export const getData = async (url, page) => {
   return await axios.get(`${url}?page=${page}&limit=1`)
}

export const postUser = async (url, data) => {
  return await axios.post(`${url}`, data);
};