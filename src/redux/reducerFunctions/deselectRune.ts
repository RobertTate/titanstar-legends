import type { AppState, RuneWithPath } from "../../types";

export default function deselectRune(state: AppState, payload: RuneWithPath) {
  const pointsSpent = state.pointsSpent;

  if (pointsSpent <= 0) {
    return state;
  };

  const talentPath = payload.path;

  const runeIndex = state[talentPath].findIndex((rune) => {
    return rune.name === payload.name;
  });

  const updatedTalentPath = state[talentPath].slice();
  const nextRune = updatedTalentPath[runeIndex + 1];
  const isNextRuneActive = nextRune && nextRune.isSelected === true;

  if (isNextRuneActive) {
    return state;
  };

  if (updatedTalentPath[runeIndex].isSelected === true) {
    //Deactivate The Rune
    updatedTalentPath[runeIndex] = {
      ...updatedTalentPath[runeIndex],
      isSelected: false
    };

    return {
      ...state,
      [talentPath]: updatedTalentPath,
      pointsSpent: pointsSpent - 1
    };
  }

  return state;
};
