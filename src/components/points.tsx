import { useSelector } from "react-redux";
import pointsStyles from "./points.module.scss";
import type { AppState } from "../types";

export default function Points() {
  const pointsSpent = useSelector((state: AppState) => state.pointsSpent);
  const totalPoints = useSelector((state: AppState) => state.totalPoints);
  const allPointsUsed = pointsSpent === totalPoints && "--allPointsUsed";
  const pointStyleMods = `points${allPointsUsed}`;

  return (
    <>
      <p
        className={`${pointsStyles["points"]}${
          allPointsUsed ? ` ${pointsStyles[pointStyleMods]}` : ""
        }`}
      >
        {`${pointsSpent}`} / {`${totalPoints}`}
      </p>
      <p className={pointsStyles["points__text"]}>Points Spent</p>
    </>
  );
}
