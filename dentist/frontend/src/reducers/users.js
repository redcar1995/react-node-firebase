import {
  GETALL
} from "../actions/types";

const initialState = [];

export default function (state = initialState, action){
  const { type, payload } = action;

  switch (type) {
  
    case GETALL:
      // console.log(payload);
      return payload;
    default:
      return state;
  }
};
