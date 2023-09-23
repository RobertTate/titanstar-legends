import type { ReactNode } from 'react';

import sliceStyles from "./slice.module.scss";

type SliceProps = {
  children: ReactNode
}

export default function Slice(props: SliceProps) {
  return (
    <div className={sliceStyles.Slice}>
      {props.children}
    </div>
  )
};
