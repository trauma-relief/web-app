import "./App.css";
import React, { useEffect, useState, useRef } from "react";
import { useOnClickOutside } from "./hooks";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  useHistory,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import HelpPage from "./pages/helpPage";
import MobileNavbar from "./components/MobileNavBar";
import ResultsPage from "./pages/resultsPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import ErrorBoundary from "./components/errors/ErrorBoundary";
import DirectoryPage from "./pages/directory/directoryPage";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export const Routes = {
  HOME: "/",
  ABOUT: "/about",
  HELP: "/help",
  RESULTS: "/results",
  PRIVACY: "/privacy",
  TERMS: "/terms",
  DIRECTORY: "/directory",
};

export const Pages = () => {
  let history = useHistory();
  return (
    <>
      <ErrorBoundary history={history}>
        <Switch>
          <Route path={Routes.DIRECTORY} component={DirectoryPage} />
          <Route path={Routes.ABOUT} component={AboutPage} />
          <Route path={Routes.HELP} component={HelpPage} />
          <Route path={Routes.RESULTS} component={ResultsPage} />
          <Route path={Routes.PRIVACY} component={PrivacyPage} />
          <Route path={Routes.TERMS} component={TermsPage} />
          <Route path={Routes.HOME} component={HomePage} />
        </Switch>
        <Footer />
      </ErrorBoundary>
    </>
  );
};

const App = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <>
      <Router>
        <ScrollToTop />
        <div ref={node}>
          <MobileNavbar open={open} setOpen={setOpen} />
        </div>
        <Navbar open={open} setOpen={setOpen} />
        <Pages />
      </Router>
    </>
  );
};

export default App;
