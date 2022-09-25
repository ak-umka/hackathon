import { SET_GROUP_SUCCESSFUL, SET_GROUP_FAILED } from "../actionTypes";
import { GroupState } from "../types";

const initialState: GroupState = {
  group: [],
  error: null,
};

const groupReducer = (state: GroupState = initialState, action: any): GroupState => {
  switch (action.type) {
    case SET_GROUP_SUCCESSFUL:
      return {
        ...state,
        group: action.payload,
      };
    case SET_GROUP_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return { ...state };
  }
}

export default groupReducer;