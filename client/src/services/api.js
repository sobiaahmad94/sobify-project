import axios from "axios";

// this is to make axios interact with my backend side
const api = axios.create( { baseURL: "http://localhost:9000/api", }); // https://www.npmjs.com/package/axios - their example: const instance = axios.create();

export default api;