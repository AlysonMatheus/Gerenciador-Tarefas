import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",  // Isso já inclui /api
});



export default api;
