import styles from "./BottomFooter.module.css";
import mail from "../assets/group.svg";
import social from "../assets/group1.svg";
import Breakpoint from "./responsive_utilities/breakpoint";

const BottomFooter1 = () => {
  return (
    <div className={styles.footer}>
      <b className={styles.contactUs}>Contact us:</b>
      <img className={styles.groupIcon} alt="" src={mail} />
      <Breakpoint at='md'>
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
      </Breakpoint>
      <Breakpoint at='lg'>
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
      </Breakpoint>
      <Breakpoint at='xlg'>
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
      </Breakpoint>   
    </div>
  );
};

export default BottomFooter1;
