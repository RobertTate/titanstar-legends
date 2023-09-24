import APP_CONSTANTS from "./constants";
import type { RuneWithPath } from "../types";

const AppActions = {
  selectRune(payload: RuneWithPath) {
    return {
      type: APP_CONSTANTS.SELECT_RUNE,
      payload,
    };
  },
  deselectRune(payload: RuneWithPath) {
    return {
      type: APP_CONSTANTS.DESELECT_RUNE,
      payload,
    };
  },
};

export default AppActions;
