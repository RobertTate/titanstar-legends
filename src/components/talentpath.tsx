import { initialAppState as stateObj } from '../redux/state';
import Rune from './rune';
import talentPathStyles from "./talentpath.module.scss";
import type { TalentPathName } from '../types';

type TalentPathProps = TalentPathName;

export default function TalentPath({ path }: TalentPathProps) {
  const talentPath = stateObj[path];
  const talentPathTitle: string = ({
    "talentPath1": "TALENT PATH 1",
    "talentPath2": "TALENT PATH 2"
  })[path];

  return (
    <>
      <div className={talentPathStyles.TalentPath}>
        <p className={talentPathStyles.TalentPathTitle}>{talentPathTitle}</p>
        {talentPath.map((rune) => {
          return (
            <Rune key={rune.name} name={rune.name} path={path} />
          )
        })}
      </div>
    </>
  )
};
