import styles from "./TeamMember.module.css";
import mailIcon from "../assets/teammemberemail.svg";
import linkedinIcon from "../assets/linkedin.svg";
import Breakpoint from "./responsive_utilities/breakpoint";

const TeamMember = ({ pic, name, description, mail, linkedin }) => {
  return (
    <div className={styles.teamMemberWrapper}>
      <img className={styles.pic} src={pic}></img>
      <Breakpoint at="xs">
        <div className={styles.name}>{name}</div>
        <div className={styles.summary}>{description}</div>
        <div className={styles.iconContainer}>
          <a className={styles.groupIcon} href={linkedin} target="_blank">
            <img alt="" src={linkedinIcon} />
          </a>
          <a className={styles.groupIcon} href={mail} target="_blank">
            <img alt="" src={mailIcon} />
          </a>
        </div>
      </Breakpoint>
      <Breakpoint at="sm">
        <div className={styles.name}>{name}</div>
        <div className={styles.summary}>{description}</div>
        <div className={styles.iconContainer}>
          <a className={styles.groupIcon} href={linkedin} target="_blank">
            <img alt="" src={linkedinIcon} />
          </a>
          <a className={styles.groupIcon} href={mail} target="_blank">
            <img alt="" src={mailIcon} />
          </a>
        </div>
      </Breakpoint>
      <Breakpoint at="md">
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
        <div className={styles.summary}>{description}</div>
      </Breakpoint>
      <Breakpoint at="lg">
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
        <div className={styles.summary}>{description}</div>
      </Breakpoint>
      <Breakpoint at="xlg">
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
        <div className={styles.summary}>{description}</div>
      </Breakpoint>
    </div>
  );
};

export default TeamMember;
