import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Episodes from "./pages/Episodes";
import Team from "./pages/Team";
import { useEffect } from "react";
import "./global.css";
import "./assets/fonts/InaiMathi/InaiMathi-MN.ttc";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/stemcast":
        title = "";
        metaDescription = "";
        break;
      case "/stemcast/episodes":
        title = "";
        metaDescription = "";
        break;
      case "/stemcast/team":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/stemcast" element={<LandingPage />} />
      <Route path="/stemcast/episodes" element={<Episodes />} />
      <Route path="/stemcast/team" element={<Team />} />
    </Routes>
  );
}
export default App;
