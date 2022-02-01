import IronhackLogo from "../../assets/images/ironhack-logo.svg";
import MenuIcon from "../../assets/images/menu-top.svg";

import styles from "./styles.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img alt="Ironhack" src={IronhackLogo} />
      <img alt="Menu" src={MenuIcon} />
    </header>
  );
}
