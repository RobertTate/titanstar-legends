import headerStyles from "./header.module.scss";

export default function Header() {
  return (
    <div className={headerStyles.HeaderContainer}>
      <h1 className={headerStyles.HeaderText}>
        TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000
      </h1>
    </div>
  );
}
