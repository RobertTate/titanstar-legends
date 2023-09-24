import { useSelector } from "react-redux";
import pointsStyles from "./points.module.scss";
import type { AppState } from "../types";

export default function Points() {
  const pointsSpent = useSelector((state: AppState) => state.pointsSpent);
  const totalPoints = useSelector((state: AppState) => state.totalPoints);
  const allPointsUsed = pointsSpent === totalPoints && "-allPointsUsed";

  const modifiedPointsStyles = [
    pointsStyles.Points,
    pointsStyles[`Points${allPointsUsed}`],
  ].join(" ");
  
  return (
    <>
      <p className={
        allPointsUsed 
          ? modifiedPointsStyles 
          : pointsStyles.Points
      }>
        {`${pointsSpent}`} / {`${totalPoints}`}
      </p>
      <p className={pointsStyles.PointsText}>Points Spent</p>
    </>
  );
}
