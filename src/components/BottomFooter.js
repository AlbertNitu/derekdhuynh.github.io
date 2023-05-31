import styles from "./BottomFooter.module.css";
const BottomFooter1 = () => {
  return (
    <div className={styles.footer}>
      <b className={styles.contactUs}>Contact us:</b>
      <img className={styles.groupIcon} alt="" src="/group.svg" />
      <div className={styles.contactstemcastca}>contact@stemcast.ca</div>
      <img className={styles.groupIcon} alt="" src="/group1.svg" />
      <a
        className={styles.igemmcgillca}
        href="mailto:igem.pharma@mail.mcgill.ca"
        target="_blank"
      >
        igem@mcgill.ca
      </a>
    </div>
  );
};

export default BottomFooter1;
