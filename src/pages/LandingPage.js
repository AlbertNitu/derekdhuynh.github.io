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
import group4 from "../assets/group-4.svg";
import group5 from "../assets/group-5.svg";

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
              <span>{`A podcast making `}</span>
              <span className={styles.biotechnology}>biotechnology </span>
              <span>{`research accessible by breaking it down and just talking about it. `}</span>
            </div>
            <div className={styles.listenNowParent}>
              <b className={styles.listenNow}>Listen Now:</b>
              <a className={styles.frameItem} href="">
                <img alt="" src={group5} />
              </a>
              <a className={styles.frameItem} href="">
                <img alt="" src={group4} />
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
            <p
              className={styles.loremIpsumDolor}
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non tellus mauris. Proin luctus non tortor sit amet dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet dui sapien. Duis eget posuere enim, quis ullamcorper Sed sagittis, lectus vel egestas cursus, nulla nisi feugiat nunc, a
                faucibus purus diam ac mi.`}</p>
          </div>
        </div>
      </Breakpoint>
      <Breakpoint at="sm">
        <div className={styles.about}>
          <div className={styles.aboutUsContainer}>
            <b className={styles.aboutUs}>{`About Us `}</b>
            <img className={styles.frameContainer} alt="" src={aboutimg} />
            <p
              className={styles.loremIpsumDolor}
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non tellus mauris. Proin luctus non tortor sit amet dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet dui sapien. Duis eget posuere enim, quis ullamcorper Sed sagittis, lectus vel egestas cursus, nulla nisi feugiat nunc, a
                  faucibus purus diam ac mi.`}</p>
          </div>
        </div>
      </Breakpoint>
      <Breakpoint at="md">
        <div className={styles.about}>
          <div className={styles.aboutUsContainer}>
            <b className={styles.aboutUs}>{`About Us `}</b>
            <p
              className={styles.loremIpsumDolor}
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non tellus mauris. Proin luctus non tortor sit amet dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet dui sapien. Duis eget posuere enim, quis ullamcorper Sed sagittis, lectus vel egestas cursus, nulla nisi feugiat nunc, a
                faucibus purus diam ac mi.`}</p>
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
            <p
              className={styles.loremIpsumDolor}
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non tellus mauris. Proin luctus non tortor sit amet dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet dui sapien. Duis eget posuere enim, quis ullamcorper Sed sagittis, lectus vel egestas cursus, nulla nisi feugiat nunc, a
                  faucibus purus diam ac mi.`}</p>
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
            <p
              className={styles.loremIpsumDolor}
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non tellus mauris. Proin luctus non tortor sit amet dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet dui sapien. Duis eget posuere enim, quis ullamcorper Sed sagittis, lectus vel egestas cursus, nulla nisi feugiat nunc, a
                faucibus purus diam ac mi.`}</p>
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
