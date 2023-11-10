import {
  USER_PROFILE_SUCCESS,
  USER_PROFILE_REQUEST,
  USER_PROFILE_FAIL,
  FETCH_FLAG,
  FETCH_OPTION,
} from "../constants/actionType";



const userProfileReducer = (state = {}, { type, payload }) => {
  console.log("action2", payload)
  switch (type) {
    // Profile
    case USER_PROFILE_REQUEST:
      return {
        loading: true,
      };
    case USER_PROFILE_SUCCESS:
      return {
        user: payload,

      };
    case USER_PROFILE_FAIL:
      return {
        loading: false,
        payload: payload,
      }
    // case FETCH_FLAG:
    //   return {
    //     loading: false,
    //     flag: { ...state, payload },
    //   };
    // case FETCH_OPTION:
    //   return {
    //     loading: false,
    //     val: { ...state, payload },
    //   };
    default:
      return state;
  }
};

export default userProfileReducer;
