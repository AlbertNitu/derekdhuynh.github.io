import styles from "./TeamMember.module.css";
import "../assets/team/example.jpeg"

const TeamMember = ({pic, name, description}) => {
    return (
      <div className={styles.teamMemberWrapper}>
        <img className={styles.pic} src={pic}></img>
        <p className={styles.summary}>{description}</p>
      </div>
    );
  };
  
  export default TeamMember;
  