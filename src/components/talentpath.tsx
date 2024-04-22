import { useSelector } from "react-redux";
import Rune from "./rune";
import talentPathStyles from "./talentpath.module.scss";
import type { AppState, TalentPathName } from "../types";

export default function TalentPath({ path }: TalentPathName) {
  const talentPath = useSelector((state: AppState) => {
    return state[path];
  });
  const talentPathTitle: string = {
    talentPath1: "TALENT PATH 1",
    talentPath2: "TALENT PATH 2",
  }[path];

  return (
    <>
      <div className={talentPathStyles["talent-path"]}>
        <p className={talentPathStyles["talent-path__title"]}>
          {talentPathTitle}
        </p>
        {talentPath.map((rune) => {
          return (
            <Rune
              key={rune.name}
              name={rune.name}
              isSelected={rune.isSelected}
              path={path}
            />
          );
        })}
      </div>
    </>
  );
}
