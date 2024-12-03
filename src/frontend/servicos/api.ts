import axios from "axios";

const api = axios.create({
  baseURL: "/Tarefa", 
});

export default api;
