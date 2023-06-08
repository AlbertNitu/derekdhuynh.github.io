import Header from "../components/Header";
import BottomFooter from "../components/BottomFooter";
import styles from "./Team.module.css";
import Playhead from "../components/Playhead";

const Team = () => {
  return (
    <div className={styles.teamWrapper}>
      <Header />
      <BottomFooter />
    </div>
  );
};

export default Team;