import type { PropsWithChildren } from "react";

import containerStyles from "./container.module.scss";

type ContainerProps = {
  type?: "TalentPathsContainer" | "PointsContainer";
};

export default function Container(props: PropsWithChildren<ContainerProps>) {
  const modifiedContainerStyles = [
    containerStyles.Container,
    containerStyles[`${props.type}`],
  ].join(" ");
  const styles = props.type
    ? modifiedContainerStyles
    : containerStyles.Container;

  return <div className={styles}>{props.children}</div>;
}
