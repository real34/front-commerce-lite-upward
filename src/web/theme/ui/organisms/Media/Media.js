import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Media.scss";

class Media extends Component {
  render() {
    const { media, renderDetails } = this.props;

    return (
      <div className="media" tabIndex="0">
        {media}
        <div className="media__details">{renderDetails()}</div>
      </div>
    );
  }
}

Media.propTypes = {
  media: PropTypes.node.isRequired,
  renderDetails: PropTypes.func.isRequired
};

export default Media;
