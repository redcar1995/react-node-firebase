import axios from "axios";
import http from "../http-common";
const API_URL = "http://localhost:8080/api/user";

const getAll = () => {
  return axios.get(API_URL + "/getall")
  .then((res)=>{
    return res.data;
  })
};


const get = id => {
  return http.get(`/find/${id}`);
};

const create = data => {
  
  return http.post("/create", data);
};

const update = (id, data) => {
  return http.post(`/update/${id}`, data);
};

const remove = id => {
  return http.delete(`/delete/${id}`);
};

const removeAll = () => {
  return http.delete('/removeall');
};

const findByTitle = title => {
  // console.log(11111111)
  return http.get(`/findby?title=${title}`);
};

const TutorialService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default TutorialService;
