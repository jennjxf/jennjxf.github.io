import React from 'react';
import './../style/sharedStyle.css';

class SecondaryButton extends React.Component {
  render() {
    return (
      <a href={this.props.link} className="secondary-btn">{this.props.text}</a>
    );
  }
}

export default SecondaryButton;
