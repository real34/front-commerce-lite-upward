import React, { Component } from "react";
import PropTypes from "prop-types";
import "./MediaGrid.scss";

class MediaGrid extends Component {
  render() {
    return <div className="media-grid">{this.props.children}</div>;
  }
}

MediaGrid.propTypes = {
  children: PropTypes.node.isRequired
};

export default MediaGrid;
