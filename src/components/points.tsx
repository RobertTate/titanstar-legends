import type { AppState } from "../types";
import { useSelector } from "react-redux";
import pointsStyles from "./points.module.scss";

export default function Points() {
  const pointsSpent = useSelector((state: AppState) => state.pointsSpent);
  const totalPoints = useSelector((state: AppState) => state.totalPoints);

  return (
    <>
      <p className={pointsStyles.Points}>
        {`${pointsSpent}`} / {`${totalPoints}`}
      </p>
      <p className={pointsStyles.PointsText}>Points Spent</p>
    </>
  );
}
