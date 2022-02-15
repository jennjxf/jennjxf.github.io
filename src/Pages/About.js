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
            I'm a software engineer at Microsoft providing internal teams insights into their cloud service or application crashes. Previously a tax accountant.
          </p>
          <br/>
          <p>
            My design style is oriented around utilizing my different skillsets to understand the root problem and create better experiences for people.
          </p>
          <br/>
          <p>
            I'm also a cat &#128008; and plant &#127793; parent, a traveler, and a milk tea consumer. I create random content and templates in my spare time, and am perpetually learning.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
