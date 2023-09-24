import type { AppState, RuneWithPath } from "../../types";

export default function selectRune(state: AppState, payload: RuneWithPath) {
  const { totalPoints, pointsSpent } = state;

  if (pointsSpent >= totalPoints) {
    return state;
  }

  const talentPath = payload.path;

  const runeIndex = state[talentPath].findIndex((rune) => {
    return rune.name === payload.name;
  });

  const updatedTalentPath = state[talentPath].slice();

  const isRuneAlreadyActive = updatedTalentPath[runeIndex].isSelected === true;

  if (isRuneAlreadyActive) {
    return state;
  }

  const isFirstRuneNotActive =
    runeIndex === 0 && updatedTalentPath[runeIndex].isSelected === false;
  const previousRune = updatedTalentPath[runeIndex - 1];
  const isPreviousRuneActive = previousRune && previousRune.isSelected === true;

  if (isFirstRuneNotActive || isPreviousRuneActive) {
    //Activate The Rune
    updatedTalentPath[runeIndex] = {
      ...updatedTalentPath[runeIndex],
      isSelected: true,
    };

    return {
      ...state,
      [talentPath]: updatedTalentPath,
      pointsSpent: pointsSpent + 1,
    };
  }

  return state;
}
