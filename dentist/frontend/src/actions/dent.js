import {
    GETALL,
  } from "./types";

  import UserService from "../services/user.service";

  export const getAll = () => async (dispatch) => {
    try {
      const res = await UserService.getAll();
      console.log(res)
  
      dispatch({
        type: GETALL,
        payload: res,
      });
    } catch (err) {
      console.log(err);
    }
  };
    
