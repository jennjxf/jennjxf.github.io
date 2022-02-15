import React from 'react';
import './../style/sharedStyle.css';

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        {/* TODO: Have hover state for the footer icons */}
        <a href="#">
          <img src="/images/linkedinIcon.svg" className="linkedin-icon" alt="linkedin logo" />
        </a>
        <a href="#">
          <img src="/images/twitterIcon.svg" className="twitter-icon" alt="twitter logo" />
        </a>
        <a href="#">
          <img src="/images/instagramIcon.svg" className="instagram-icon" alt="instagram logo" />
        </a>
      </div>
    );
  }
}

export default Footer;


// TO DELETE?
