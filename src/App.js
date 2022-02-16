import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Protect from 'react-app-protect'
import './style/sharedStyle.css';
import Navbar from './Components/Navbar';
import ScrollToTop from './Components/ScrollToTop';
import Homepage from './Pages/Homepage';
import Portfolio from './Pages/Portfolio';
import About from './Pages/About';
import UnfoundPage from './Pages/UnfoundPage';
import VoyagerRedesign from './CaseStudyPages/VoyagerRedesign';
import PortfolioDesign from './CaseStudyPages/PortfolioDesign';
import ThePlantSpace from './CaseStudyPages/ThePlantSpace';
import ToTopButton from './Components/ToTopButton';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div id="pass-container">
            <Protect  sha512='716F8933E1C91946C434784A79E1108CDE302A45AAE7D381D3BB8CCC15CDA32D649DB81FDA79B8BB0A2EE93E56AC113DFCDDBDA797535B5A6D3E564C68B5AFAE'
              blur={false}
              boxTitle='Hello World.'
              inputPlaceholder=''
              buttonLabel='Enter'
              styles={'textAlign: center'}
            >
          <ScrollToTop />
            <div id="app-container">
                {/* Top navbar */}
                <Navbar />
                <div id="main-body">
                  {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
                  <Switch>
                    <Route exact path="/">
                      <Homepage />
                    </Route>
                    <Route path="/portfolio">
                      <Portfolio />
                    </Route>
                    <Route path="/about">
                      <About />
                    </Route>
                    <Route path="/theplantspace">
                      <ThePlantSpace />
                    </Route>
                    <Route path="/voyagerredesign">
                      <VoyagerRedesign />
                    </Route>
                    <Route path="/portfoliodesign">
                      <PortfolioDesign />
                    </Route>
                    <Route path="*">
                      <UnfoundPage />
                    </Route>
                  </Switch>
                </div>
            </div>
          <ToTopButton/>
          </Protect>
        </div>
      </Router>
    );
  }
}

export default App;
