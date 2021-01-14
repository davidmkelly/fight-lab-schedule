import axios from "axios";
let instance;

if (process.env.NODE_ENV === "production") {
  instance = axios.create({
    baseURL: "https://thefightlabtx.com/api/v1/",
    withCredentials: true,
  });
} else {
  instance = axios.create({
    baseURL: "http://localhost:8080/api/v1/",
    withCredentials: true,
  });
}

export default instance;
