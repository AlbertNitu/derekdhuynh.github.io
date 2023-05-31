import styles from "./About.module.css";
const About = ({ layer1, stemcastCell3, cornerFrames }) => {
  return (
    <div className={styles.about}>
      <div className={styles.solidMech1}>
        <div className={styles.g46}>G = 46 kPa</div>
        <div className={styles.solidMech2}>
          <img className={styles.layer1Icon} alt="" src={layer1} />
          <div className={styles.n}>30 N</div>
          <div className={styles.n1}>72 N</div>
          <div className={styles.e28}>E = 28 kPa</div>
        </div>
      </div>
      <img className={styles.stemcastCell3} alt="" src={stemcastCell3} />

      <div>
        <div className={styles.aboutItem} />
        <img className={styles.cornerFramesIcon} alt="" src={cornerFrames} />
      </div>
      
      <div>
        <b className={styles.aboutUs}>{`About Us `}</b>
        <div className={styles.loremIpsumDolorContainer}>
          <p
            className={styles.loremIpsumDolor}
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non tellus mauris. Proin luctus non tortor sit amet dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet dui sapien. Duis eget posuere enim, quis ullamcorper `}</p>
          <p className={styles.loremIpsumDolor}>&nbsp;</p>
          <p className={styles.loremIpsumDolor}>
            Sed sagittis, lectus vel egestas cursus, nulla nisi feugiat nunc, a
            faucibus purus diam ac mi.
          </p>
          <p className={styles.loremIpsumDolor}>&nbsp;</p>
        </div>
      </div>
      
      <div className={styles.aboutChild} />
      
    </div>
  );
};

export default About;
