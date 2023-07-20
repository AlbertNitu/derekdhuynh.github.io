import Header from "../components/Header";
import BottomFooter from "../components/BottomFooter";
import styles from "./Episodes.module.css";
import Playhead from "../components/Playhead";
import line from "../assets/line.png";
import apple from "../assets/group-4.svg";
import spotify from "../assets/group-5.svg";
import episodes from "../data/episodes";

const Episodes = () => {
  return (
    <div className={styles.episodesWrapper}>
      <Header />
      <div className={styles.insertImageParent}>
        <div className={styles.episodes}>
          <b className={styles.episodes1}>Episodes</b>
          <img className={styles.episodesChild} alt="" src={line} />
          <div className={styles.groupParent}>
            <a
              className={styles.frameChild}
              target="_blank"
              href="https://open.spotify.com/show/1VjEbzN6Im9u79hw0WfYpK?si=e75ce1ea73f84348"
            >
              <img alt="" src={spotify} />
            </a>
            <a
              className={styles.frameChild}
              target="_blank"
              href="https://podcasts.apple.com/ca/podcast/stemcast/id1537913168"
            >
              <img alt="" src={apple} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.playheadParent}>
        {episodes.map((playhead, index) => (
          <Playhead
            key={index}
            num={playhead.num}
            title={playhead.title}
            time={playhead.time}
          />
        ))}
      </div>
      <BottomFooter />
    </div>
  );
};

export default Episodes;
