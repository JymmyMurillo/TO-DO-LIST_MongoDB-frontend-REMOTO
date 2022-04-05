import axios from "axios";

export default axios.create({
  baseURL: "https://to-do-mongodb-backend.herokuapp.com/",
  //"http://localhost:3030"
});