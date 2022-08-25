import { getAuthorPostsCount } from "@/libs/getAuthorPostsCount";
import React from "react";
import Author from "../Author";

const Writers = ({ section, authors, posts }) => {
  const postCount = getAuthorPostsCount(posts);

  return (
    <div className="section-sm pb-0">
      <div className="row justify-content-center">
        <div className="col-lg-10 text-center">
          <h2 className="section-title">
            <span>{section.title}</span>
          </h2>

          <div className="row gx-4 gy-5 gx-md-5 justify-content-center text-center">
            {authors.map((author, i) => (
              <div key={i} className="col-lg-4 col-sm-6">
                <Author author={author} postCount={postCount} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Writers;
