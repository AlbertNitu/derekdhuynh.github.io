import styles from "./Header.module.css";
import logo from "../assets/inv-logo-remastered.svg";
import nav from "../assets/nav_icon.svg";
import { Link } from "react-router-dom";
import Breakpoint from "./responsive_utilities/breakpoint";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.invLogoRemasteredIcon} alt="" src={logo} />
        <b className={styles.stemcast}>
          <span>STEM</span>
          <span className={styles.cast}>{`cast. `}</span>
        </b>
      </div>

      <Breakpoint at="xs">
        <NavBar />
      </Breakpoint>
      <Breakpoint at="sm">
        <NavBar />
      </Breakpoint>
      <Breakpoint at="md">
        <div className={styles.aboutParent}>
          <Link className={styles.link} to="/">
            <div className={styles.about}>ABOUT</div>
          </Link>
          <div className={styles.frameChild} />
          <Link className={styles.link} to="/episodes">
            <div className={styles.episodes}>EPISODES</div>
          </Link>
          <div className={styles.frameChild} />
          <Link className={styles.link} to="/team">
            <div className={styles.episodes}>TEAM</div>
          </Link>
        </div>
      </Breakpoint>
      <Breakpoint at="lg">
        <div className={styles.aboutParent}>
          <Link className={styles.link} to="/">
            <div className={styles.about}>ABOUT</div>
          </Link>
          <div className={styles.frameChild} />
          <Link className={styles.link} to="/episodes">
            <div className={styles.episodes}>EPISODES</div>
          </Link>
          <div className={styles.frameChild} />
          <Link className={styles.link} to="/team">
            <div className={styles.episodes}>TEAM</div>
          </Link>
        </div>
      </Breakpoint>
      <Breakpoint at="xlg">
        <div className={styles.aboutParent}>
          <Link className={styles.link} to="/">
            <div className={styles.about}>ABOUT</div>
          </Link>
          <div className={styles.frameChild} />
          <Link className={styles.link} to="/episodes">
            <div className={styles.episodes}>EPISODES</div>
          </Link>
          <div className={styles.frameChild} />
          <Link className={styles.link} to="/team">
            <div className={styles.episodes}>TEAM</div>
          </Link>
        </div>
      </Breakpoint>
    </div>
  );
};

export default Header;
