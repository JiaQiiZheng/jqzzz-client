import axios from "axios";

const API = axios.create({
  // baseURL: "https://jqzzz-server.vercel.app",
  baseURL: "http://localhost:8080",
});

export const fetchImages = () => API.get("work/work_apalachicola");
