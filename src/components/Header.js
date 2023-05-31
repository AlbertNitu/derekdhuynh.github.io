import styles from "./Header.module.css";
const Header1 = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img
          className={styles.invLogoRemasteredIcon}
          alt=""
          src="/inv-logo-remastered.svg"
        />
        <b className={styles.stemcast}>
          <span>STEM</span>
          <span className={styles.cast}>{`cast. `}</span>
        </b>
      </div>
      <div className={styles.aboutParent}>
        <div className={styles.about}>ABOUT</div>
        <div className={styles.frameChild} />
        <div className={styles.episodes}>EPISODES</div>
        <div className={styles.frameChild} />
        <div className={styles.team}>TEAM</div>
      </div>
    </div>
  );
};

export default Header1;
