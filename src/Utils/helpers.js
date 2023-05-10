import axios from "axios";

export const getData = async (url, page, limit) => {
   return await axios.get(`${url}?page=${page}&limit=${limit}`)
}

export const postUser = async (url, data) => {
  return await axios.post(`${url}`, data);
};