import React from 'react';
import './../style/sharedStyle.css';

class Tag extends React.Component {
  render() {
    return (
      <div className="tag">
        {this.props.tagText}
      </div>
    );
  }
}

export default Tag;
