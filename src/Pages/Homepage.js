import React from 'react';
import './../style/sharedStyle.css';
import PrimaryButton from '../Components/PrimaryButton';
import Portfolio from './Portfolio';
import ToTopButton from '../Components/ToTopButton';
import Footer from '../Components/Footer';

class Homepage extends React.Component {
  render() {
    return (
      <div id="homepage">
        <div className="section">
          <h4>Hi, I'm Jenn <span className="emoji">&#x1F44B;&#127996;</span></h4>
          <br/>
          <h2 className="design-summary">
            I use my multidisciplinary background to <span className="highlight">design better experiences for people</span>.
          </h2>
          <br/>
          <br/>
          <p className="short-text">
            Currently absorbing UX knowledge at the <a href="https://www.svcseattle.com/" target="_blank" rel="noreferrer" className="external-link">School of Visual Concepts</a>, and providing internal teams insights into their cloud service or application crashes at Microsoft.
          </p>
          <br/>
          {/* <p>I'm a cat 	&#128008; and plant &#127793; parent, a traveler, and a milk tea consumer. I create random content and templates in my spare time.</p> */}
          <br/>
          <br/>
          <br/>
          <PrimaryButton link="#portfolio" text="Portfolio" />
          <br/>
          <br/>
          <br/>
          &#x2193;
          <br/>
          <br/>
          <br/>
          <h5>Interested in connecting?</h5>
          <br/>
          <div id="social-links">
            {/* TODO: Have hover state for the footer icons */}
            <a href="/">
              <img src="/images/linkedinIcon.svg" className="linkedin-icon" alt="linkedin logo" />
            </a>
            <a href="/">
              <img src="/images/twitterIcon.svg" className="twitter-icon" alt="twitter logo" />
            </a>
            <a href="/">
              <img src="/images/instagramIcon.svg" className="instagram-icon" alt="instagram logo" />
            </a>
          </div>
        </div>
        <div className="section">
          <Portfolio/>
        </div>
        <Footer />
        {/* <ToTopButton/> */}
      </div>
    );
  }
}

export default Homepage;
