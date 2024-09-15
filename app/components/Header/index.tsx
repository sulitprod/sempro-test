import Button from "../Button";
import HoverText from "../Button/HoverText";
import Menu from "../Menu";
import ChevronDown from "../SVG/ChevronDown";
import Logo from "../SVG/Logo";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <Menu />
        <Button className={styles.select} hoverEffect>
          <HoverText value="Выбрать квартиру" />
          <ChevronDown />
        </Button>
      </div>
      <Logo />
      <div className={styles.right}>
        <p>+7 495 527 21 21</p>
        <Button format="secondary" hoverEffect>
          <Button.HoverText value="Заказать звонок" />
        </Button>
      </div>
    </div>
  );
};

export default Header;
