import React from 'react';
import './../style/sharedStyle.css';

class PrimaryButton extends React.Component {
  render() {
    const isNewTab = this.props.isNewTab;

    return (
      <div>
        {isNewTab
          ? <a href={this.props.link} className="primary-btn" target="_blank" rel="noreferrer">{this.props.text}</a>
          : <a href={this.props.link} className="primary-btn">{this.props.text}</a>
        }
      </div>
    );
  }
}

export default PrimaryButton;
