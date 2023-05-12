import axios from "axios";

export const getData = async (url, page, limit) => {
  try {
     return await axios.get(`${url}?page=${page}&limit=${limit}`);
  } catch (error) {
    return error
  }
  
}

export const postUser = async (url, data) => {

  try {
     return await axios.post(`${url}`, data);
  } catch (error) {
     return error;
  }
};

