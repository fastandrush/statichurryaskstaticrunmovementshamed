import axios from 'axios';

const axiosCreatedInstace = axios.create({baseURL: 'http://localhost:4000/'});
export default axiosCreatedInstace;