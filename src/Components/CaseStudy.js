import React from 'react';
import './../style/sharedStyle.css';
import {
  NavLink
} from 'react-router-dom';

class CaseStudy extends React.Component {
  render() {
    return (
      <div className="case-study">
        <NavLink to={this.props.link}>
          <img src={this.props.img} alt={this.props.altText} />
        </NavLink>
        <div className="case-study-summary">
          <h6>{this.props.caseStudyType}</h6>
          <NavLink to={this.props.link}>
            <h4>{this.props.title}</h4>
          </NavLink>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default CaseStudy;
