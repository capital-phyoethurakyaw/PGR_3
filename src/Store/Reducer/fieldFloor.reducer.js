import * as types from "../type";
const initialState = {
    isloading:false,
    floor_data: [],
  }
  
  const fieldfloorReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.Floor_KEY:
        return {
          ...state,
          floor_data: action.payload
        }
  
      default:
        return state
      }
  }
  export default fieldfloorReducer
  