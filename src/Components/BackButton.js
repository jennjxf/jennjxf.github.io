import React from 'react';
import './../style/sharedStyle.css';

class BackButton extends React.Component {
  render() {
    return (
      <a href={this.props.link} id="back-btn" title="take me back">{this.props.text}</a>
    );
  }
}


export default BackButton;
