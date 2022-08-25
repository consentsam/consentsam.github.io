import React from "react";
import { marked } from "marked";

const Detail = ({ section: { content } }) => {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-10">
        <div
          className="content"
          dangerouslySetInnerHTML={{
            __html: marked.parse(content),
          }}
        ></div>
      </div>
    </div>
  );
};

export default Detail;
