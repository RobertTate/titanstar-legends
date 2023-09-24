import type { AppState } from "../types";

export const initialAppState: AppState = {
  totalPoints: 6,
  pointsSpent: 0,
  talentPath1: [
    {
      name: "chevrons",
      isSelected: false,
    },
    {
      name: "silverware",
      isSelected: false,
    },
    {
      name: "cake",
      isSelected: false,
    },
    {
      name: "crown",
      isSelected: false,
    },
  ],
  talentPath2: [
    {
      name: "ship",
      isSelected: false,
    },
    {
      name: "snorkle",
      isSelected: false,
    },
    {
      name: "lightning",
      isSelected: false,
    },
    {
      name: "skull",
      isSelected: false,
    },
  ],
};
