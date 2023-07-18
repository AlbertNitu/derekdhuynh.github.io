import Header from "../components/Header";
import Home from "../components/Home";
import BottomFooter from "../components/BottomFooter";
import styles from "./LandingPage.module.css";
import frame from "../assets/cornerimage.png";
import aboutimg from "../assets/aboutimage.png";
import stemcastCell3 from "../assets/stemcast-cell-3.svg";
import solidMech from "../assets/solid-mech.svg";
import Breakpoint from "../components/responsive_utilities/breakpoint";
import homepic from "../assets/homepic.png";
import apple from "../assets/group-4.svg";
import spotify from "../assets/group-5.svg";

const description = (
  <div className={styles.loremIpsumDolor}>
    STEMcast is run by McGill iGEM, a group of undergraduate researchers in
    synthetic biology. STEMcast’s goal is to explore research from many
    scientific fields–from public health to particle physics–and to make it
    accessible to people from diverse educational levels and walks of life. From
    our interviews with experts, we discover insights and bring listeners into
    the loop in a variety of fields.
    <br />
    <br />
    Tune in weekly to listen to the McGill iGEM team discuss big questions in
    health, biology, AI, medicine, math, and more.
  </div>
);

const LandingPage = () => {
  return (
    <div className={styles.formattedFrame}>
      <Header />
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
              <span>{`A podcast bringing you `}</span>
              <span className={styles.biotechnology}>into the loop </span>
              <span>{`on STEM research in biotech, AI, medicine, environment, math and much more.`}</span>
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

      <Breakpoint at="xs">
        <div className={styles.about}>
          <div className={styles.aboutUsContainer}>
            <b className={styles.aboutUs}>{`About Us `}</b>
            <img className={styles.frameContainer} alt="" src={aboutimg} />
            {description}
          </div>
        </div>
      </Breakpoint>
      <Breakpoint at="sm">
        <div className={styles.about}>
          <div className={styles.aboutUsContainer}>
            <b className={styles.aboutUs}>{`About Us `}</b>
            <img className={styles.frameContainer} alt="" src={aboutimg} />
            {description}
          </div>
        </div>
      </Breakpoint>
      <Breakpoint at="md">
        <div className={styles.about}>
          <div className={styles.aboutUsContainer}>
            <b className={styles.aboutUs}>{`About Us `}</b>
            {description}
          </div>
          <div className={styles.cornerFramesContainer}>
            <img className={styles.cornerFramesIcon} alt="" src={frame} />
          </div>
        </div>
      </Breakpoint>
      <Breakpoint at="lg">
        <div className={styles.about}>
          <img className={styles.solidMech1} src={solidMech}></img>
          <div className={styles.aboutUsContainer}>
            <b className={styles.aboutUs}>{`About Us `}</b>
            {description}
          </div>
          <div className={styles.cornerFramesContainer}>
            <img className={styles.cornerFramesIcon} alt="" src={frame} />
          </div>
        </div>
      </Breakpoint>
      <Breakpoint at="xlg">
        <div className={styles.about}>
          <img className={styles.solidMech1} src={solidMech}></img>
          <div className={styles.aboutUsContainer}>
            <b className={styles.aboutUs}>{`About Us `}</b>
            {description}
          </div>
          <div className={styles.cornerFramesContainer}>
            <img className={styles.cornerFramesIcon} alt="" src={frame} />
          </div>
        </div>
        <img className={styles.stemcastCell3} alt="" src={stemcastCell3} />
      </Breakpoint>
      <BottomFooter />
    </div>
  );
};

export default LandingPage;
