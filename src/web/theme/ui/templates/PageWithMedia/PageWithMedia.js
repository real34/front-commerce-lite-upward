import React from "react";
import { withRouter } from "react-router-dom";
import { IconButton } from "theme/ui/atoms/Icon";
import "./PageWithMedia.scss";

const PageWithMedia = ({ media, content, history }) => {
  return (
    <div className="page-with-media">
      <div className="page-with-media__media">
        {history.length > 0 && (
          <IconButton icon="arrow-left" onClick={history.goBack} />
        )}
        {media}
      </div>
      <div className="page-with-media__content">{content}</div>
    </div>
  );
};

export default withRouter(PageWithMedia);
