import Header from "../components/Header";
import Home from "../components/Home";
import BottomFooter from "../components/BottomFooter";
import styles from "./LandingPage.module.css";
import frame from '../assets/corner-frames.png';
import stemcastCell3 from '../assets/stemcast-cell-3.svg';
import solidMech from '../assets/solid-mech.svg';
import Breakpoint from "../components/responsive_utilities/breakpoint";

const LandingPage = () => {
  return (
    <div className={styles.formattedFrame}>
      <Header />
      <Home />   
        <div className={styles.about}>
          <Breakpoint at='xs'>
            <div className={styles.aboutUsContainer}>
              <b className={styles.aboutUs}>{`About Us `}</b>
              <div className={styles.frameContainer}></div>
              <p
                  className={styles.loremIpsumDolor}
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non tellus mauris. Proin luctus non tortor sit amet dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet dui sapien. Duis eget posuere enim, quis ullamcorper Sed sagittis, lectus vel egestas cursus, nulla nisi feugiat nunc, a
                faucibus purus diam ac mi.`}</p>
            </div>
          </Breakpoint>
          <Breakpoint at='sm'>
            <div className={styles.aboutUsContainer}>
              <b className={styles.aboutUs}>{`About Us `}</b>
              <div className={styles.frameContainer}></div>
              <p
                  className={styles.loremIpsumDolor}
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non tellus mauris. Proin luctus non tortor sit amet dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet dui sapien. Duis eget posuere enim, quis ullamcorper Sed sagittis, lectus vel egestas cursus, nulla nisi feugiat nunc, a
                faucibus purus diam ac mi.`}</p>
            </div>
          </Breakpoint>
          <Breakpoint at='md'>
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
          </Breakpoint>
          <Breakpoint at='lg'>
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
          </Breakpoint>
          <Breakpoint at='xlg'>
          <img className={styles.solidMech1} src={solidMech}></img>
          <img className={styles.stemcastCell3} alt="" src={stemcastCell3} />
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
          </Breakpoint>
        </div>
      <BottomFooter />
    </div>
  );
};

export default LandingPage;
