import React from "react";
import ReactDOM from "react-dom";
import { ReactTinyLink } from "react-tiny-link";

function LinkPreview({url}) {
  return (
    <div className="link-preview">
      <ReactTinyLink
        cardSize="small"
        showGraphic={true}
        maxLine={2}
        minLine={1}
        url={url}
      />
    </div>
  );
}

export default LinkPreview;
