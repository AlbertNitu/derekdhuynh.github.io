import Header from "../components/Header";
import LandingPage from "../components/LandingPage";
import About from "../components/About";
import BottomFooter from "../components/BottomFooter";
import styles from "./FormattedFrame.module.css";
const FormattedFrame = () => {
  return (
    <div className={styles.formattedFrame}>
      <Header />
      <LandingPage />
      <About cornerFrames="/corner-frames1.svg"s/>
      <BottomFooter />
    </div>
  );
};

export default FormattedFrame;
