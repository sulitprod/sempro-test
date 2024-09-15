import styles from "./HoverText.module.scss";

type HoverTextProps = Readonly<{
  value: string;
}>;

const HoverText = ({ value }: HoverTextProps) => {
  return (
    <div className={styles.hoverText}>
      <p>
        {value}
        <span className={styles.secondary}>{value}</span>
      </p>
    </div>
  );
};

export default HoverText;
