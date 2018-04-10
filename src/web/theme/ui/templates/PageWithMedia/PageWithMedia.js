import React from "react";
import { withRouter } from "react-router-dom";
import { IconButton } from "theme/ui/atoms/Icon";
import "./PageWithMedia.scss";

const PageWithMedia = ({ media, children, history }) => {
  return (
    <div className="page-with-media">
      <div className="page-with-media__media">
        {history.length > 0 && (
          <div className="page-with-media__icon">
            <IconButton icon="arrow-left" onClick={history.goBack} />
          </div>
        )}
        {media}
      </div>
      <div className="page-with-media__content">{children}</div>
    </div>
  );
};

export default withRouter(PageWithMedia);
