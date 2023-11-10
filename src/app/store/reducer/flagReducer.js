import {
  FETCH_FLAG,
} from "../constants/actionType";



const flagReducer = (state = { flag: false }, { type, payload }) => {
  console.log("flagReducer", payload)
  switch (type) {


    case FETCH_FLAG:
      return {
        loading: false,
        flag: payload,
      };
    // case FETCH_OPTION:
    //   return {
    //     loading: false,
    //     val: { ...state, payload },
    //   };
    default:
      return state;
  }
};

export default flagReducer;
