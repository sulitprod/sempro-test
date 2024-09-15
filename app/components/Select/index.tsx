import ReactSelect from "react-select";

import styles from "./Select.module.scss";

const Select = () => {
  return (
    <ReactSelect
      className={styles.select}
      options={[
        { value: "chocolate", label: "Выбрать квартиру" },
        { value: "strawberry", label: "Выбрать квартиру" },
        { value: "vanilla", label: "Выбрать квартиру" },
      ]}
    />
  );
};

export default Select;
