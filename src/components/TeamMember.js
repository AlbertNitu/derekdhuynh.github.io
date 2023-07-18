import styles from "./TeamMember.module.css";
import mailIcon from "../assets/teammemberemail.svg";
import linkedinIcon from "../assets/linkedin.svg";
import Breakpoint from "./responsive_utilities/breakpoint";

const TeamMember = ({ pic, name, description, mail, linkedin }) => {
  return (
    <div className={styles.teamMemberWrapper}>
      <img className={styles.pic} src={pic}></img>
      <div className={styles.nameIconContainer}>
        <div className={styles.name}>{name}</div>
        <div className={styles.iconContainer}>
          <a className={styles.groupIcon} href={linkedin} target="_blank">
            <img alt="" src={linkedinIcon} />
          </a>
          <a className={styles.groupIcon} href={mail} target="_blank">
            <img alt="" src={mailIcon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
