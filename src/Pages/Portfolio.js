import React from 'react';
import './../style/sharedStyle.css';
import CaseStudy from '../Components/CaseStudy';

class Portfolio extends React.Component {
  render() {
    return (
      <div id="portfolio">
        <br/>
        {/* TODO: Get the case study divs to have fitted height */}
        <div className="case-study-container">
          <CaseStudy
            link="/theplantspace"
            img="/images/testImage.png"
            altText="alt text"
            caseStudyType="Product Design"
            title="The Plant Space"
            description="E-commerce plant shop."
          />
          <CaseStudy
            link="/portfoliodesign"
            img="/images/mockPortfolio.svg"
            altText="alt text"
            caseStudyType="Product Design"
            title="Portfolio Design"
            description="Portfolio for UX designer."
          />
          <CaseStudy
            link="/voyagerredesign"
            img="/images/voyager-redesign/mockup-redesign.png"
            altText="alt text"
            caseStudyType="Product Redesign"
            title="Voyager Redesign"
            description="Mobile UI redesign for a cryptocurrency application."
          />
        </div>
      </div>
    );
  }
}

export default Portfolio;
