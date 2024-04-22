export type Rune = {
  name: string;
  isSelected: boolean;
};

export type TalentPath = Rune[];

export type TalentPathName = {
  path: "talentPath1" | "talentPath2";
};

export type RuneWithPath = Rune & TalentPathName;

export type AppState = {
  totalPoints: number;
  pointsSpent: number;
  talentPath1: TalentPath;
  talentPath2: TalentPath;
};
