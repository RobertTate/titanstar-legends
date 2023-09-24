import type { Reducer } from "@reduxjs/toolkit";
import { initialAppState } from "./state";
import APP_CONSTANTS from "./constants";
import { selectRune, deselectRune } from "./reducerFunctions";

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
