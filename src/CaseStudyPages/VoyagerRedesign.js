import React from 'react';
import BackButton from '../Components/BackButton';
import PrimaryButton from '../Components/PrimaryButton';
import ToTopButton from '../Components/ToTopButton';
import ZoomableImage from '../Components/ZoomableImage';
import './../style/sharedStyle.css';

class VoyagerRedesign extends React.Component {
  render() {
    return (
      <div id="voyager-redesign" className="case-study-page">
        <div className="alternate-section">
          <img src="/images/voyager-redesign/mockup-redesign.png" alt="" className="testing-img" />
        </div>
        <div className="section">
          <div className="inner-section-center">
            <h1><span className="highlight">Voyager Redesign</span></h1>
            <br/>
            <p>Voyager is a publicly traded company that offers a crypto trading mobile application.</p>
            <br/>
            <br/>
            <PrimaryButton link="https://www.figma.com/proto/PpJs989Zgier1iNTXUrr0i/UI-Components?node-id=354%3A282&scaling=scale-down&page-id=354%3A0&starting-point-node-id=354%3A282" text="See Prototype" isNewTab="true" />
            <div className="case-study-overview">
              <div>
                <h5>Role</h5>
                <p>Designer, UX Researcher</p>
              </div>
              <div>
                <h5>Duration</h5>
                <p>3 days</p>
              </div>
              <div>
                <h5>Tools</h5>
                <p>Figma, Google Survey</p>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="inner-section-left">
            <h4>Background <hr className="line"/></h4>
            <p>Crypto has been growing in awareness, and more platforms have emerged to allow retail investors and traders a way to get into the crypto space.</p>
            <br/>
            <p>Voyager is a publicly traded company that offers a crypto trading application. The brokerage platform allows you to trade crypto commission-free, as well as earn interest on certain crypto. It also allows you to automate your investing by providing the option to set up recurring buys daily, weekly, monthly, or every pay period. The application is currently only available on mobile (iOS and Android).</p>
            <br/>
            <p>I chose Voyager to redesign because it’s not as well-known as other crypto platforms, such as Coinbase, but it offers different features to distinguish itself from other platforms, such as high-yield interest. I want to improve the current experience for other retail investors, and increase usage of the application.</p>
            <br/>
            <p><b>Disclaimer: My redesign occurred in the summer of 2021, and occurred before Voyager did their redesign.</b></p>
          </div>
        </div>

        <div className="alternate-section">
          <div className="inner-section-left overview-section">
            <div className="overview-section-col">
              <h4>Challenge <hr className="line"/></h4>
              <br/>
              <h2>How do we improve the Voyager experience to meet the main goals of retail investors?</h2>
              <br/>
              <p>Most crypto investors will transfer their investments to a hardware wallet.</p>
              <br/>
              <h4><i>"Not your keys, not your coins."</i></h4>
              <br/>
              <p>The main draw of Voyager is the interest and limit orders.</p>
            </div>
            <div className="overview-section-col click-zoom">
              <label>
                <input type="checkbox" />
                <img src="/images/voyager-redesign/mockup-original-right.png" alt="" className="voyager-img" />
              </label>
              <p className="img-caption">Original Voyager design (as of June 2021)</p>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="inner-section-left">
            <h4>Research Focus <hr className="line"/></h4>
            {/* TODO: Potential UI to do a table pointing for goals to insights/recommendation? */}
            <p>The goals of my research are to:</p>
            <ul>
              <li>Understand investors' initial experience with Voyager.</li>
              <li>Understand investors' crypto investing goals.</li>
              <li>Determine if Voyager's current UI meets those crypto investing goals.</li>
            </ul>
            <br/>
            <p>I conducted an initial survey to see a sample group's experience or knowledge about crypto and crypto investing platforms in general.</p>
            <br/>
            <p>From this sample of 8, I conducted a hybrid of contextual inquiry and interview on a selection of 5 to understand what their initial experience with Voyager.</p>
            <br/>
            <p>Based on the research insights:</p>
            <div className="insight-card-section">
              <div className="insight-card">
                Robinhood and Coinbase were the most used applications.
              </div>
              <div className="insight-card">
                Main usage is to invest and hold, and view crypto statistics.
              </div>
              <div className="insight-card">
                Trouble finding interest earned.
              </div>
              <div className="insight-card">
                Trouble with navigation (e.g., finding the Account page, using the Portfolio link).
              </div>
            </div>
            <p>I sent a follow-up survey to get feedback from the 5 participants about their experience with Voyager.</p>
            <p>Based on these findings, I identified personas and focused on the main problems with the current UI.</p>
          </div>
        </div>

        <div className="alternate-section">
          <div className="inner-section-left">
            <h4>Main Problems <hr className="line"/></h4>
            <p>Based on my research findings, these were the two main problems that investors were facing when using Voyager.</p>
            <br/>
            <h6>Problem #1:</h6>
            <p>Most of the investors' main goals are to invest long-term, and regularly purchase or purchase during dips.</p>
            <ul>
              <li>How might we make it easier for investors to determine price dips?</li>
            </ul>
            <h6>Problem #2:</h6>
            <p>Most of the investors currently utilize other crypto trading applications to quickly check-in on their investments and interest earnings. There's no incentive for them to switch.</p>
            <ul>
              <li>How might we make it easier for investors to view their investments?</li>
              <li>How might we make viewing or finding interest returns more convenient?</li>
              <li>How might we make the general navigation easier to find?</li>
            </ul>
          </div>
        </div>

        <div className="section">
          <div className="inner-section-left">
            <h4>Design <hr className="line"/></h4>
            <p>The biggest redesign change was to make the main navigation more consistent.</p>
            <p>Another was to make the interest returns and portfolio more convenient to view. Currently, you have to scroll all the way to the right of your portfolio to find your interest return.</p>
            <br/>
            <div className="redesign-img">
              <ZoomableImage img="/images/voyager-redesign/mockup-redesign-iphone12-3.png" className="redesign-img" altText="" />
              <ZoomableImage img="/images/voyager-redesign/mockup-redesign-iphone12-2.png" className="redesign-img" altText="" />
              <ZoomableImage img="/images/voyager-redesign/mockup-redesign-iphone12-1.png" className="redesign-img" altText="" />
            </div>
          </div>
        </div>

        <div className="alternate-section">
          <div className="inner-section-left">
            <h4>Learnings <hr className="line"/></h4>
            <p>This weekend project allowed me to apply some of the self-taught user research and design concepts prior to getting into the School of Visual Concepts' UX certificate program.</p>
            <br/>
            <p>Although creative innovation is great some times, consistent navigation seems to still be key. I learned this through my design journey, and was able to see that come through with the Voyager application. A few months after my (private) redesign, I noticed that Voyager actually changed their navigation to the more consistent bottom bar.</p>
            <br/>
            <p>I focused mostly on the research and problem-solving, not so much on the visual and interaction design. So in future projects, I'd like to improve on my visual and interaction design, as well as information architecture.</p>
          </div>
        </div>

        <div className="section">
          <div className="inner-section-left">
            <h4>Additional Artifacts <hr className="line"/></h4>
            <div className="artifact-section">
              <ZoomableImage img="/images/voyager-redesign/prototype.png" className="artifact-img" altText="" />
              <ZoomableImage img="/images/voyager-redesign/wireframe1.png" className="artifact-img" altText="" />
              <ZoomableImage img="/images/voyager-redesign/wireframe2.png" className="artifact-img" altText="" />
            </div>
          </div>
        </div>
        <BackButton link="/#portfolio" text="&#x2190;"/>
        <ToTopButton/>
      </div>
    );
  }
}

export default VoyagerRedesign;
