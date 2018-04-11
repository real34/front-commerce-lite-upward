import React, { Component } from "react";
import PropTypes from "prop-types";
import chunk from "lodash/chunk";
import "./MediaGrid.scss";

class MediaGrid extends Component {
  render() {
    const { children } = this.props;

    const splittedChildren = chunk(children, 3).map((chunk, index) => {
      return { main: chunk[0], siblings: chunk.slice(1) };
    });

    return (
      <div className="media-grid">
        {splittedChildren.map(({ main, siblings }, index) => (
          <div className="media-grid__row" key={index}>
            <div className="media-grid__row__main">
              <div className="media-grid__item">{main}</div>
            </div>
            <div className="media-grid__row__siblings">
              {siblings.map(media => (
                <div className="media-grid__item" key={media.key}>
                  {media}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

MediaGrid.propTypes = {
  children: PropTypes.node.isRequired
};

export default MediaGrid;
