import axios from "axios";
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_REST_API_URL,
});
export default axiosClient;
