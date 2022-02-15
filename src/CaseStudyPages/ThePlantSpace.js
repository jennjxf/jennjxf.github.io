import React from 'react';
import BackButton from '../Components/BackButton';
import PrimaryButton from '../Components/PrimaryButton';
import ToTopButton from '../Components/ToTopButton';
import './../style/sharedStyle.css';

class ThePlantSpace extends React.Component {
  render() {
    return (
      <div id="the-plant-space" className="case-study-page">
        <div className="section">
          <div className="inner-section-center">
            <h1><span className="highlight">The Plant Space</span></h1>
            <br/>
            <p>E-commerce project for UX certificate program at School of Visual Concepts. The Plant Space is an online and local shop that helps you find indoor plants that fit your lifestyle, and provides the support you need for you and your plants to thrive.</p>
            <br/>
            <br/>
            <PrimaryButton link="/" text="See Prototype" />
            <div className="case-study-overview">
              <div>
                <h4>Role</h4>
                <p>Designer, UX Researcher</p>
              </div>
              <div>
                <h4>Duration</h4>
                <p>3 quarters</p>
              </div>
              <div>
                <h4>Tools</h4>
                <p>Figma, Google Survey</p>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="inner-section-left overview-section">
            <div className="overview-section-col">
              <h3>Background <hr className="line"/></h3>
              <p>
                Transitioning to design meant that I needed to start a portfolio to showcase my work. This is the first portfolio I've created, and I wanted to apply my design learning to this portfolio project.
              </p>
            </div>
            <div className="overview-section-col">
              <img src="/images/testImage.png" alt="" />
            </div>
          </div>

          <div className="alternate-section">
            <div className="inner-section-left">
              <h3>Challenge <hr className="line"/></h3>
              <br/>
              <h2>How do we create a meaningful and fun experience for people looking for indoor plants and joining a community?</h2>
              <br/>
              <p>Indoor plant sales have increased since 2020. Many plant parents still rely on information online and in community groups.</p>
              <br/>
              <p>Although plant shops have an online presence, their website typically don't provide information on how to select or take care of plants.</p>
              <p>Additionally, people are still wary of shopping online for plants.</p>
            </div>
          </div>

          <div className="section">
            <div className="inner-section-left">
              <h3>Research Focus<hr className="line"/></h3>
              {/* TODO: Potential UI to do a table pointing for goals to insights/recommendation? */}
              <p>The goals of my research are to:</p>
              <ul>
                <li>Understand how people make their purchase decisions.</li>
                <li>Identify how people prefer to find plant care information.</li>
                <li>Determine the importance of plant care services or workshops.</li>
              </ul>
              <br/>
              <p>I conducted a competitive analysis, survey, and interview. And created personas based on the insights.</p>
              <p>Based on the research insights:</p>
              <ul>
                <li>Plant workshops or services were not utilized often.</li>
                <li>Plant care information can get overwhelming and inconsistent.</li>
                <li>Existing online shopping experience is not appealing.</li>
              </ul>           
            </div>
          </div>

          <div className="alternate-section">
            <div className="inner-section-left">
              <h2>How might we make the online shopping experience more attractive?</h2>            
            </div>
          </div>

          <div className="section">
            <div className="inner-section-left">
              <h3>Design <hr className="line"/></h3>
              <p>I decided to focus on the main design problem and goal for my initial portfolio, instead of the nitty-gritty steps. I iterated through a few different designs on both Figma and Wix (see artifacts below).</p>
              <p>I also decided to code my own portfolio to learn more about React and get more practice in.</p>
              <p>I'm a pretty practical person and love minimalistic designs. However, I've heard critiques about minimalism being a lack of visual design.</p>
              <p>Fitt's Law</p>
            </div>
          </div>

          <div className="alternate-section">
            <div className="inner-section-left">
              <h3>Learnings <hr className="line"/></h3>
              <p>Building out my first portfolio gave me hands-on experience with various no-code low-code portfolio builders (such as Wix and Webflow), and it also </p>
              <p>Further exploration of React and coding more visual components into my portfolio. I also want to continue improving on the accessibility, and storytelling of my case studies.</p>
            </div>
          </div>

          <div className="section">
            <div className="inner-section-left">
              <h3>Artifacts <hr className="line"/></h3>
              <p></p>
            </div>
          </div>
        </div>
        <BackButton link="/#portfolio" text="&#x2190;"/>
        <ToTopButton/>
      </div>
    );
  }
}

export default ThePlantSpace;
