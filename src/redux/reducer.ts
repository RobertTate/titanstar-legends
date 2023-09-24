import APP_CONSTANTS from "./constants";
import { initialAppState } from "./state";
import { selectRune, deselectRune } from "./reducerFunctions";
import type { Reducer } from "@reduxjs/toolkit";

const appReducer: Reducer = (state = initialAppState, action) => {
  switch (action.type) {
    case APP_CONSTANTS.SELECT_RUNE:
      return selectRune(state, action.payload);
    case APP_CONSTANTS.DESELECT_RUNE:
      return deselectRune(state, action.payload);
    default:
      return state;
  }
};

export default appReducer;
