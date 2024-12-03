import axios from "axios";

const api = axios.create({
  baseURL: "/tarefas", 
});

export default api;
