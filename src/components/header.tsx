import headerStyles from "./header.module.scss";

export default function Header() {
  return (
    <div className={headerStyles["header"]}>
      <h1 className={headerStyles["header__text"]}>
        TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000
      </h1>
    </div>
  );
}
