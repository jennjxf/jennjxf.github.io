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
            <p>E-commerce project for UX certificate program at School of Visual Concepts.</p>
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
                The Plant Space is an online and local shop that helps you find indoor plants that fit your lifestyle, and provides the support you need for you and your plants to thrive.
              </p>
              <br/>
              <p>This project was accomplished in alignment with the UX certificate courses.</p>
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
              <br/>
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
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nunc dolor, finibus ut venenatis sit amet, imperdiet gravida arcu. Nunc dignissim facilisis nisl. Curabitur suscipit, tellus ut vestibulum sollicitudin, velit lectus ullamcorper nulla, eu suscipit libero magna ut neque. Duis malesuada nisl velit. Vivamus ultrices velit non lectus laoreet vehicula. Nam id odio efficitur, gravida ligula quis, elementum velit. Donec egestas velit at enim efficitur, nec volutpat erat lacinia.</p>
              <br/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nunc dolor, finibus ut venenatis sit amet, imperdiet gravida arcu. Nunc dignissim facilisis nisl. Curabitur suscipit, tellus ut vestibulum sollicitudin, velit lectus ullamcorper nulla, eu suscipit libero magna ut neque. Duis malesuada nisl velit. Vivamus ultrices velit non lectus laoreet vehicula. Nam id odio efficitur, gravida ligula quis, elementum velit. Donec egestas velit at enim efficitur, nec volutpat erat lacinia.</p>
              <p>Fitt's Law</p>
            </div>
          </div>

          <div className="alternate-section">
            <div className="inner-section-left">
              <h3>Learnings <hr className="line"/></h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nunc dolor, finibus ut venenatis sit amet, imperdiet gravida arcu. Nunc dignissim facilisis nisl. Curabitur suscipit, tellus ut vestibulum sollicitudin, velit lectus ullamcorper nulla, eu suscipit libero magna ut neque. Duis malesuada nisl velit. Vivamus ultrices velit non lectus laoreet vehicula. Nam id odio efficitur, gravida ligula quis, elementum velit. Donec egestas velit at enim efficitur, nec volutpat erat lacinia.</p>
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
