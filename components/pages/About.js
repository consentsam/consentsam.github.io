import React from "react";
import { marked } from "marked";
import Image from "next/image";

const About = ({ section }) => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-10 text-center">
          <h2
            className="text-dark mb-0"
            dangerouslySetInnerHTML={{
              __html: marked.parseInline(section.title),
            }}
          ></h2>
        </div>
      </div>

      <div className="py-5 my-3">
        <div className="row g-4 justify-content-center text-center">
          {section.images.map((item, i) => {
            let grid_class;
            if (item.size === "half") {
              grid_class = "col-lg-6";
            } else if (item.size === "quarter") {
              grid_class = "col-lg-3 col-6";
            } else {
              grid_class = "col-lg-12";
            }
            return (
              <div key={i} className={`${grid_class} image-grid-${i + 1}`}>
                <Image
                  className="w-100 h-auto rounded"
                  src={item.src}
                  alt={item.alt}
                  width={item.width + "px"}
                  height={item.height + "px"}
                  layout="responsive"
                  placeholder="blur"
                  blurDataURL={item.src}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-10 text-center">
          <div
            className="content"
            dangerouslySetInnerHTML={{
              __html: marked.parse(section.description),
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default About;
