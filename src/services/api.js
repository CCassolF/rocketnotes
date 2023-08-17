import axios from "axios";

export const api = axios.create({
  baseURL: 'https://ccassol-rocketnotes-api.onrender.com'
})