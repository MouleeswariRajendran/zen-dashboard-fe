import axios from "axios";

const instance = axios.create({
  // .. congigure axios baseURL
  baseURL: "https://zen-student-dashboard.onrender.com/"
});



export default instance;