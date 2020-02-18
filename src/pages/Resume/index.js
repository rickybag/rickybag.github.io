import React, { useEffect } from "react";

import Context from "../../context";

import ResumeItem from "../../components/Resume";

const Resume = title => {
  //Change document title
  useEffect(() => {
    document.title = title;
  });

  return (
    <Context.Consumer>
      {context => {
        const { settings } = context;
        return (
          <div className="resume">
            <div className="container">
              <h2>{settings.resume.title}</h2>
              <ResumeItem {...settings} />
            </div>
          </div>
        );
      }}
    </Context.Consumer>
  );
};

export default Resume;
