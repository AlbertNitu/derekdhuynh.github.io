import Header from "../components/Header";
import BottomFooter from "../components/BottomFooter";
import TeamMember from "../components/TeamMember";
import styles from "./Team.module.css";
import line from "../assets/line.png";
import currentTeam from "../data/currentTeam";
import pastTeam from "../data/pastTeam";
import rectangle from "../assets/profilerectangle.png";

const Team = () => {
  return (
    <div className={styles.teamWrapper}>
      <Header />
      <div className={styles.insertImageParent}>
        <div className={styles.title}>
          <b className={styles.episodes1}>Team</b>
          <img className={styles.episodesChild} alt="" src={line} />
        </div>
      </div>
      <div className={styles.teamSection}>
        <div className={styles.memberText}>Members</div>
        <div className={styles.teamGrid}>
          {currentTeam.map((teamMember, index) => (
            <TeamMember
              key={index}
              name={teamMember.name}
              pic={teamMember.pic}
              linkedin={teamMember.linkedin}
              mail={teamMember.email}
            />
          ))}
        </div>
        {/*<div className={styles.memberText}>Past Members</div>
        <div className={styles.teamGrid}>
          {pastTeam.map((teamMember, index) => (
            <TeamMember
              key={index}
              name={teamMember.name}
              description={teamMember.description}
              pic={teamMember.pic}
            />
          ))}
          </div>*/}
      </div>

      <BottomFooter />
    </div>
  );
};

export default Team;
