import styles from "./Home.module.css";
import homepic from "../assets/homepic.png"
import group4 from "../assets/group-4.svg"
import group5 from "../assets/group-5.svg"
import Breakpoint from "./responsive_utilities/breakpoint";

const Home = () => {
  return (
    <div className={styles.landingPage}>
      <div className={styles.landingPageInner}>
      <Breakpoint at="xlg">
            <img className={styles.frameChild} alt="" src={homepic} />
      </Breakpoint>
            <div className={styles.sTEMCastParent}>
              <b className={styles.sTEContainer}>
                <span className={styles.s}>STEM</span>
                <span className={styles.cast}>cast.</span>
              </b>
              <div className={styles.aPodcastMakingContainer}>
                <span>{`A podcast making `}</span>
                <span className={styles.biotechnology}>biotechnology </span>
                <span>{`research accessible by breaking it down and just talking about it. `}</span>
              </div>
              <div className={styles.listenNowParent}>
                <b className={styles.listenNow}>Listen Now:</b>
                <img className={styles.frameItem} alt="" src={group5} />
                <img className={styles.frameItem} alt="" src={group4} />
              </div>
            </div>
      </div>
    </div>
  );
};

export default Home;
