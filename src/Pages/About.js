import React from 'react';
import './../style/sharedStyle.css';

class About extends React.Component {
  render() {
    return (
      <div id="about">
        <div>
          <img src="/images/about-me.jpg" alt="woman standing in middle of lavender" id="about-me-img" />
        </div>
        <div className="about-me-content">
          <h1>About me</h1>
          <p>
            I'm a software engineer at Microsoft with cloud service and application crashes, with prior experience as a tax accountant.
          </p>
          <p>
            My design style is oriented around...
          </p>
          <p>
            I'm also a cat &#128008; and plant &#127793; parent, a traveler, and a milk tea consumer. I create random content and templates in my spare time, and am constantly learning.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
