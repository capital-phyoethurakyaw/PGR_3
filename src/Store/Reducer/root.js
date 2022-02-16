import { combineReducers } from "redux";
// import noteReducer from "./note.reducer";
import modalReducer from "./modal.reducer";
import fieldfloorReducer from "./fieldFloor.reducer";
import fielduserReducer from "./fieldUser.reducer";
import roofReducer from "./fieldRoof.reducer";
export default combineReducers({
//   noteReducer,
  modalReducer,
  fieldfloorReducer,
  fielduserReducer,
  roofReducer
});
