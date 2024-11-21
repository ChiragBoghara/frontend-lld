import styles from "./AccordianItem.module.css";

const AccordianItem = ({accordian, isOpen, toggle}) => {
  return (
    <div onClick={toggle} className={styles.accordianItem}>
      <div className={styles.accordianHeader}>
        <p>{accordian.title}</p>
        <p>{isOpen ? "▲" : "▼"}</p>
      </div>
      {isOpen && <div className={styles.accordianContent}>{accordian.content}</div>}
    </div>
  );
};

export default AccordianItem;