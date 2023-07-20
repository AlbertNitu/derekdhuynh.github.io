import styles from "./Playhead.module.css";
import play from "../assets/play.svg";
const Playhead = ({ num, title, time }) => {
  return (
    <div className={styles.playhead}>
      <div className={styles.episodes}>
        <img className={styles.frameChild} alt="" src={play} />
        <div className={styles.epN}># Ep {num}</div>
        <div className={styles.insertEpisodeTitle}>{title}</div>
      </div>
      <div className={styles.time}>{time}</div>
    </div>
  );
};

export default Playhead;
