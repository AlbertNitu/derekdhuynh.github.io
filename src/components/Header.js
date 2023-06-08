import styles from "./Header.module.css";
import logo from "../assets/inv-logo-remastered.svg"
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img
          className={styles.invLogoRemasteredIcon}
          alt=""
          src={logo}
        />
        <b className={styles.stemcast}>
          <span>STEM</span>
          <span className={styles.cast}>{`cast. `}</span>
        </b>
      </div>
      <div className={styles.aboutParent}>
        <Link className={styles.link} to='/stemcast'><div className={styles.about}>ABOUT</div></Link>
        <div className={styles.frameChild} />
        <Link className={styles.link} to='/stemcast/episodes'><div className={styles.episodes}>EPISODES</div></Link>
        <div className={styles.frameChild} />
        <Link className={styles.link} to='/stemcast/team'><div className={styles.episodes}>TEAM</div></Link>
      </div>
    </div>
  );
};

export default Header;
