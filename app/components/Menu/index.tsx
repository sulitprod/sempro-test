import Button from "../Button";
import Burger from "../SVG/Burger";

import styles from "./Menu.module.scss";

const Menu = () => {
  return (
    <Button format="secondary" className={styles.menu}>
      <Burger />
      <p>Меню</p>
    </Button>
  );
};

export default Menu;
