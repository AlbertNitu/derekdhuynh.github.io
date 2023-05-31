import styles from "./LandingPage.module.css";
const LandingPage1 = () => {
  return (
    <div className={styles.landingPage}>
      <div className={styles.landingPageInner}>
        <div className={styles.vectorParent}>
          <img className={styles.frameChild} alt="" src="/rectangle-3.svg" />
          <div className={styles.sTEMCastParent}>
            <b className={styles.sTEContainer}>
              <span>
                <span className={styles.s}>S</span>
                <span className={styles.span}>{` `}</span>
                <span className={styles.s}>T</span>
                <span className={styles.span1}>{` `}</span>
                <span className={styles.s}>E</span>
                <span className={styles.span1}>{` `}</span>
                <span className={styles.s}>M</span>
                <span>{`  `}</span>
              </span>
              <span className={styles.cast}>cast.</span>
            </b>
            <div className={styles.aPodcastMakingContainer}>
              <span>{`A podcast making `}</span>
              <span className={styles.biotechnology}>biotechnology</span>
              <span className={styles.span3}>{` `}</span>
              <span>{`research accessible by breaking it down and just talking about it. `}</span>
            </div>
            <div className={styles.listenNowParent}>
              <b className={styles.listenNow}>Listen Now:</b>
              <img className={styles.frameItem} alt="" src="/group-5.svg" />
              <img className={styles.frameItem} alt="" src="/group-4.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage1;
