import axios from "axios";

const instance = axios.create({
  // .. congigure axios baseURL
<<<<<<< HEAD
  baseURL: "https://zen-dashboard-sowbi.onrender.com"             //https://zen-student-dashboard.onrender.com/ http://localhost:8000
=======
  baseURL: "https://zen-student-dashboard.onrender.com"
>>>>>>> 7be96f202086f43148156f1f1c93e36d88c3270f
});



export default instance;
