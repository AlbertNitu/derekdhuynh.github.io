import styles from "./BottomFooter.module.css";
import mail from "../assets/group.svg";
import social from "../assets/group1.svg";

const BottomFooter1 = () => {
  return (
    <div className={styles.footer}>
      <b className={styles.contactUs}>Contact us:</b>
      <img className={styles.groupIcon} alt="" src={mail} />
      <a
        className={styles.contactstemcastca}
        href="mailto:contact@stemcast.ca"
        target="_blank"
      >
        contact@stemcast.ca
      </a>
      <img className={styles.groupIcon} alt="" src={social} />
      <a
        className={styles.igemmcgillca}
        href="mailto:igem@mcgill.ca"
        target="_blank"
      >
        igem@mcgill.ca
      </a>
    </div>
  );
};

export default BottomFooter1;
