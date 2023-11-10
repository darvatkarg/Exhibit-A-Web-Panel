import {
  FETCH_FLAG, FETCH_OPTION,
} from "../constants/actionType";



const valueReducer = (state = {}, { type, payload }) => {
  console.log("valueReducer", payload)
  switch (type) {
    case FETCH_OPTION:
      return {
        loading: false,
        val: payload,
      };
    default:
      return state;
  }
};

export default valueReducer;
