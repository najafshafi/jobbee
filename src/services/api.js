import axios from 'axios';
import { BASE_API_URL } from './config';
import { toast } from 'react-toastify';

export const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
  timeout: 12000,
});

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {


    if (response.data.message)
      toast.success(response.data.message, {
        position: "top-right",
        autoClose: true,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });


    // Handle successful response
    return response;
  },
  (error) => {
    // Handle response error
    if (error.response) {
      // The request was made, but the server responded with an error status code
      console.error('Response error:', error.response.data);
    } else if (error.request) {
      // The request was made, but no response was received
      console.error('No response received:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Request setup error:', error.message);
    }

    toast.error(error.response.data.message, {
      position: "top-right",
      autoClose: true,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    // Return a rejected promise with the error object
    return Promise.reject(error);
  }
);



export function setToken(token) {
  axiosInstance.defaults.headers.common.Authorization = 'Bearer ' + token;
}
