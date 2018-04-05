import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Media.scss";

class Media extends Component {
  constructor() {
    super();
    this.state = {
      renderDetails: false
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter(event) {
    event.preventDefault();
    event.stopPropagation();

    this.setState({
      renderDetails: true
    });
  }

  handleMouseLeave(event) {
    event.preventDefault();
    event.stopPropagation();

    this.setState({
      renderDetails: false
    });
  }

  render() {
    const { media, renderDetails } = this.props;

    return (
      <div
        className="media"
        tabIndex="0"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onBlur={this.handleMouseEnter}
        onFocus={this.handleMouseLeave}
      >
        {media}
        {this.state.renderDetails ? (
          <div className="media__details">{renderDetails()}</div>
        ) : null}
      </div>
    );
  }
}

Media.propTypes = {
  media: PropTypes.node.isRequired,
  renderDetails: PropTypes.func.isRequired
};

export default Media;
