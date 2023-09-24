import { useState } from "react";
import type { MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppActions from "../redux/actions";
import runeStyles from "./rune.module.scss";
import type { AppState, RuneNameWithPath, Rune } from "../types";

export default function Rune({ name, path }: RuneNameWithPath) {
  const [mobileTouchToggler, setMobileTouchToggler] = useState(true);
  const [wasJustTouchedOnMobile, setWasJustTouchedOnMobile] = useState(false);
  const dispatch = useDispatch();
  const rune = useSelector((state: AppState) => {
    return state[path].find((r) => r.name === name);
  }) as Rune;
  const isSelected = rune.isSelected;
  const runeState = isSelected ? "-active" : "-inactive";
  const modifiedRuneHolderStyles = [
    runeStyles.RuneHolder,
    runeStyles[`RuneHolder${runeState}`],
  ].join(" ");
  const modifiedRuneStyles = [
    runeStyles.Rune,
    runeStyles[`Rune${runeState}`],
  ].join(" ");
  const modifiedRuneBridgeStyles = [
    runeStyles.RuneBridge,
    runeStyles[`RuneBridge${runeState}`],
  ].join(" ");

  const handleContextMenu = (e: MouseEvent) => {
    e.preventDefault();
  };

  const handleMouseDown = (e: MouseEvent) => {
    const leftClick = 0;
    const rightClick = 2;

    if (wasJustTouchedOnMobile) {
      setWasJustTouchedOnMobile(false);
      return;
    }

    switch (e.button) {
      case leftClick:
        dispatch(AppActions.selectRune({ name, isSelected, path }));
        return;
      case rightClick:
        dispatch(AppActions.deselectRune({ name, isSelected, path }));
        return;
      default:
        return;
    }
  };

  const handleMobileTouch = () => {
    setWasJustTouchedOnMobile(true);
    switch (mobileTouchToggler) {
      case true:
        dispatch(AppActions.selectRune({ name, isSelected, path }));
        setMobileTouchToggler(false);
        return;
      case false:
        dispatch(AppActions.deselectRune({ name, isSelected, path }));
        setMobileTouchToggler(true);
        return;
      default:
        return;
    }
  };

  return (
    <>
      <div className={modifiedRuneHolderStyles}>
        <div
          role="button"
          aria-label={`${rune?.name} icon`}
          onContextMenu={handleContextMenu}
          onMouseDown={handleMouseDown}
          onTouchEnd={handleMobileTouch}
          className={modifiedRuneStyles}
          id={`${rune?.name}${runeState}`}
        ></div>
        <span className={modifiedRuneBridgeStyles}></span>
      </div>
    </>
  );
}
