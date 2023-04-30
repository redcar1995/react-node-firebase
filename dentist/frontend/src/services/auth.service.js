import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = async (formData) => {
      // console.log(photo)
  return await axios.post(API_URL + "signup", formData)
  .then((response)=>{
    // console.log(response.data.user)
    return response.data;
  })

};

const login = async (email, password) => {

  return await axios
  .post(API_URL + "signin", {
    email,
    password,
  })
  .then((response) => {
    if (response.data.accessToken) {
      
      // console.log(response)
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      
      return response.data;
    });
};


const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};