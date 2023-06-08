import styles from "./Playhead.module.css";
import play from "../assets/play.svg"
const Playhead = () => {
  return (
    <div className={styles.playhead}>
        <div className={styles.polygonParent}>
          <img className={styles.frameChild} alt="" src={play} />
          <div className={styles.epN}># Ep N</div>
          <div
            className={styles.insertEpisodeTitle}
          >{`Insert Episode Title Here with So and So `}</div>
          <div className={styles.div}>23:57</div>
        </div>
        
    </div>
  );
};

export default Playhead;