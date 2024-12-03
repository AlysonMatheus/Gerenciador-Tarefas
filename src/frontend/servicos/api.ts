import axios from "axios"npm install axios;

const api = axios.create({
  baseURL: "/tarefas", // Usando a mesma origem
});

export default api;
