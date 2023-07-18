import styles from "./Home.module.css";
import homepic from "../assets/homepic.png";
import apple from "../assets/group-4.svg";
import spotify from "../assets/group-5.svg";
import Breakpoint from "./responsive_utilities/breakpoint";
import stemcastCell4 from "../assets/stemcastCell4.svg";
import stemcastCell3 from "../assets/stemcast-cell-3.svg";
import React, { useEffect, useRef } from "react";

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
            <a
              className={styles.frameItem}
              target="_blank"
              href="https://open.spotify.com/show/1VjEbzN6Im9u79hw0WfYpK?si=e75ce1ea73f84348"
            >
              <img alt="" src={spotify} />
            </a>
            <a
              className={styles.frameItem}
              target="_blank"
              href="https://podcasts.apple.com/ca/podcast/stemcast/id1537913168"
            >
              <img alt="" src={apple} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
