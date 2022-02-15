import React from 'react';
import BackButton from '../Components/BackButton';
import PrimaryButton from '../Components/PrimaryButton';
import ToTopButton from '../Components/ToTopButton';
import './../style/sharedStyle.css';

class PortfolioDesign extends React.Component {
  render() {
    return (
      <div id="portfolio-design" className="case-study-page">
        <div className="section">
          <div className="inner-section-center">
            <h1><span className="highlight">Portfolio Design</span></h1>
            <br/>
            <p>Transitioning to design meant that I needed to start a portfolio to showcase my work. This is the first portfolio I've created, and I wanted to apply my design learning to this portfolio project. The goal of this project was to create a personal portfolio.</p>
            <br/>
            <br/>
            <PrimaryButton link="/" text="See Prototype" />
            <div className="case-study-overview">
              <div>
                <h4>Role</h4>
                <p>Designer, Developer</p>
              </div>
              <div>
                <h4>Duration</h4>
                <p>1 week</p>
              </div>
              <div>
                <h4>Tools</h4>
                <p>Figma, Wix, React</p>
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
              <h2>This portfolio needs to stand out and showcase my design knowledge and problem-solving skills.</h2>
              <br/>
              <p>Recruiters don't have time to look through dozens of portfolios in detail a day.</p>
              <br/>
              <p>So, how might I create a portfolio that focuses on the important pieces while considering cognitive overload.</p>
            </div>
          </div>

          <div className="section">
            <div className="inner-section-left">
              <h3>Research <hr className="line"/></h3>
              <p>I looked up "Best UX design portfolios" and "Accessible design portfolios". And I shifted through various portfolios of current designers, and mapped out the common components. These include:</p>
              <ul>
                <li>Home</li>
                <li>Portfolio or work</li>
                <li>Individual case study pages</li>
                <li>About</li>
                <li>Resume</li>
                <li>Social media or contact links in footer</li>
              </ul>
              <br/>
              <p>Hearing several times that recruiters have to skim hundreds of portfolios and resumes, and that the cookie cutter process wasn't as important.</p>
              <p>I started out with the common Home, About, Work pages, but decided to condense/simplify that down even more to just two pages.</p>           
            </div> 
          </div>

          <div className="alternate-section">
            <div className="inner-section-left">
              <h3>Design <hr className="line"/></h3>
              <p>I decided to focus on the main design problem and goal for my initial portfolio, instead of the nitty-gritty steps. I iterated through a few different designs on both Figma and Wix (see artifacts below).</p>
              <p>I also decided to code my own portfolio to learn more about React and get more practice in.</p>
              <p>I'm a pretty practical person and love minimalistic designs. However, I've heard critiques about minimalism being a lack of visual design.</p>
              {/* TODO: Add color scheme and logo branding */}     
            </div>
          </div>

          <div className="section">
            <div className="inner-section-left">
              <h3>Learnings <hr className="line"/></h3>
              <p>Building out my first portfolio gave me hands-on experience with various no-code low-code portfolio builders (such as Wix and Webflow), and it also </p>
              <p>Further exploration of React and coding more visual components into my portfolio. I also want to continue improving on the accessibility, and storytelling of my case studies.</p>       
            </div>
          </div>

          <div className="alternate-section">
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

export default PortfolioDesign;
