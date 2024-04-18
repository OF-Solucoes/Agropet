import axios from "axios";

const api = axios.create({
  baseURL: "http://aliads.kinghost.net:21034"  // "http://localhost:3000",
});

export default api;