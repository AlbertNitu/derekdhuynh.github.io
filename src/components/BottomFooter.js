import styles from "./BottomFooter.module.css";
import mail from "../assets/group.svg";
import Breakpoint from "./responsive_utilities/breakpoint";

const BottomFooter1 = () => {
  return (
    <div className={styles.footer}>
      <b className={styles.contactUs}>Contact us:</b>
      <div className={styles.emails}>
        <div className={styles.contactstemcastca}>
          <a
            className={styles.groupIcon}
            href="mailto:igem@mcgill.ca"
            target="_blank"
          >
            <img alt="" src={mail} />
          </a>
          <a
            className={styles.contactstemcastca}
            href="mailto:contact@stemcast.ca"
            target="_blank"
          >
            contact@stemcast.ca
          </a>
        </div>
        <div className={styles.igemmcgillca}>
          <a
            className={styles.groupIcon}
            href="mailto:igem@mcgill.ca"
            target="_blank"
          >
            <img alt="" src={mail} />
          </a>
          <a
            className={styles.igemmcgillca}
            href="mailto:igem@mcgill.ca"
            target="_blank"
          >
            igem@mcgill.ca
          </a>
        </div>
      </div>
      {/*
      
      <Breakpoint at="md">
        <a
          className={styles.contactstemcastca}
          href="mailto:contact@stemcast.ca"
          target="_blank"
        >
          contact@stemcast.ca
        </a>
        <a
          className={styles.groupIcon}
          href="mailto:igem@mcgill.ca"
          target="_blank"
        >
          <img alt="" src={mail} />
        </a>
        <a
          className={styles.igemmcgillca}
          href="mailto:igem@mcgill.ca"
          target="_blank"
        >
          igem@mcgill.ca
        </a>
      </Breakpoint>
      <Breakpoint at="lg">
        <a
          className={styles.contactstemcastca}
          href="mailto:contact@stemcast.ca"
          target="_blank"
        >
          contact@stemcast.ca
        </a>
        <a
          className={styles.groupIcon}
          href="mailto:igem@mcgill.ca"
          target="_blank"
        >
          <img alt="" src={mail} />
        </a>
        <a
          className={styles.igemmcgillca}
          href="mailto:igem@mcgill.ca"
          target="_blank"
        >
          igem@mcgill.ca
        </a>
      </Breakpoint>
      <Breakpoint at="xlg">
        <a
          className={styles.contactstemcastca}
          href="mailto:contact@stemcast.ca"
          target="_blank"
        >
          contact@stemcast.ca
        </a>
        <a
          className={styles.groupIcon}
          href="mailto:igem@mcgill.ca"
          target="_blank"
        >
          <img alt="" src={mail} />
        </a>
        <a
          className={styles.igemmcgillca}
          href="mailto:igem@mcgill.ca"
          target="_blank"
        >
          igem@mcgill.ca
        </a>
      </Breakpoint>
      */}
    </div>
  );
};

export default BottomFooter1;
