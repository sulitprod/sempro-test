import Image from "next/image";

import BodyImage from "@/app/static/body-image.png";

import ShortLogo from "../SVG/ShortLogo";
import styles from "./Body.module.scss";
import VideoButton from "./VideoButton";

const Body = () => {
  return (
    <div className={styles.body}>
      <div className={styles.left}>
        <p>О проекте</p>
        <div className={styles.image}>
          <Image
            src={BodyImage}
            width={733}
            height={900}
            alt="Иллюстрация тела страницы"
          />
          <div className={styles.inlineLogo}>
            <ShortLogo />
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.square} />
        <div className={styles.mainText}>
          <p>уютное и безопасное пространство для счастливой,</p>
          <p className={styles.blue}>спокойной и размеренной жизни</p>
        </div>
        <div className={styles.secondaryText}>
          <p className={styles.blue}>
            Квартиры от 65 до 356 м2 с чистовой отделкой,
          </p>
          <p>
            балконами, лоджиями и террасами в собственной закрытой охраняемой
            территории.
          </p>
        </div>
        <VideoButton />
      </div>
    </div>
  );
};

export default Body;
