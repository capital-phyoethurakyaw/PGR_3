import * as types from "../type";
const initialState = {
    isloading:false,
    user_data: [],
  }
  
  const fielduserReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.User_KEY:
        return {
          ...state,
          user_data: action.payload
        }
  
      default:
        return state
      }
  }
  export default fielduserReducer
  