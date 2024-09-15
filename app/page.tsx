import Image from "next/image";
import styles from "./page.module.scss";

import HeaderPano from "@/app/static/header-pano.png";
import Body from "./components/Body";
import Title from "./components/SVG/Titile";

const MainPage = () => {
  return (
    <div className={styles.page}>
      <Image
        className={styles.headerPano}
        src={HeaderPano}
        width={1760}
        height={600}
        alt="Иллюстрация верхней части страницы"
      />
      <div className={styles.content}>
        <div>
          <p>Дом бизнес-класса</p>
          <p>для ценителей роскоши</p>
        </div>
        <Title />
      </div>
      <Body />
    </div>
  );
};

export default MainPage;
