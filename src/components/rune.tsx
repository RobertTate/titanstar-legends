import { useState, memo } from "react";
import type { MouseEvent } from "react";
import { useDispatch } from "react-redux";
import AppActions from "../redux/actions";
import runeStyles from "./rune.module.scss";
import type { RuneWithPath } from "../types";

const Rune = ({ name, isSelected, path }: RuneWithPath) => {
  const [mobileTouchToggler, setMobileTouchToggler] = useState(true);
  const [wasJustTouchedOnMobile, setWasJustTouchedOnMobile] = useState(false);
  const dispatch = useDispatch();
  const runeState = isSelected ? "--active" : "--inactive";
  const runeStyleMods = `rune${runeState}`;
  const runeIconStyleMods = `rune__icon${runeState}`;
  const runeBridgeStyleMods = `rune__bridge${runeState}`;

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
      <div className={`${runeStyles["rune"]} ${runeStyles[runeStyleMods] ? ` ${runeStyles[runeStyleMods]}` : ""}`}>
        <div
          role="button"
          aria-label={`${name} icon`}
          onContextMenu={handleContextMenu}
          onMouseDown={handleMouseDown}
          onTouchEnd={handleMobileTouch}
          className={`${runeStyles["rune__icon"]} ${runeStyles[runeIconStyleMods]}`}
          id={`${name}${runeState}`}
        ></div>
        <span className={`${runeStyles["rune__bridge"]} ${runeStyles[runeBridgeStyleMods]}`}></span>
      </div>
    </>
  );
}

const MemoizedRune = memo(Rune);

export default MemoizedRune;
