import * as types from "../type";
const initialState = {
    isloading:false,
    roof_data: [],
  }
  
  const roofReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.Roof_KEY:
        return {
          ...state,
          roof_data: action.payload
        }
  
      default:
        return state
      }
  }
  export default roofReducer
  