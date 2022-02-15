import React from 'react';
import './../style/sharedStyle.css';

class Stepper extends React.Component {
  render() {
    return (
      <div className="stepper-container">
        <div className="stepper-item completed">
          <div className="step-counter">1</div>
          <div className="step-name">Context</div>
        </div>
        <div className="stepper-item active">
          <div className="step-counter">2</div>
          <div className="step-name">Challenge</div>
        </div>
      </div>
    );
  }
}

export default Stepper;
