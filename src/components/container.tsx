import type { PropsWithChildren } from "react";
import containerStyles from "./container.module.scss";

type ContainerProps = {
  type: "TalentPathsContainer" | "PointsContainer";
};

export default function Container(props: PropsWithChildren<ContainerProps>) {
  const styleConfig = {
    TalentPathsContainer: "container__talents",
    PointsContainer: "container__points",
  };

  return (
    <div className={containerStyles[`${styleConfig[props.type]}`]}>
      {props.children}
    </div>
  );
}
