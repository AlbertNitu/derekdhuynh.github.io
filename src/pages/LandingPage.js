import Header from "../components/Header";
import Home from "../components/Home";
import About from "../components/About";
import BottomFooter from "../components/BottomFooter";
import styles from "./LandingPage.module.css";
const LandingPage = () => {
  return (
    <div className={styles.formattedFrame}>
      <Header />
      <Home />
      <About/>
      <BottomFooter />
    </div>
  );
};

export default LandingPage;
