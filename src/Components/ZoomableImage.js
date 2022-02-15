import React from 'react';
import './../style/sharedStyle.css';

class ZoomableImage extends React.Component {
  render() {
    return (
      <div className="click-zoom">
        <label>
          <input type="checkbox" />
          <img src={this.props.img} className={this.props.className ? this.props.className : ""} alt={this.props.altText} />
        </label>
      </div>
    );
  }
}

export default ZoomableImage;
