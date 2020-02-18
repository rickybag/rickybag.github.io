import React, { Fragment } from "react";
import Button from "../../components/ui/Button";

import Context from "../../context";

const AboutMe = () => (
  <Context.Consumer>
    {context => {
      const { name, job, description } = context.settings;
      return (
        <section className="about-me home">
          <div className="container">
            <h1 className="name">{name}</h1>
            <h2 className="tagline">{job}</h2>
            <div className="description">
              {description.map((text, index) => (
                <Fragment key={index}>
                  {text}
                  <br />
                </Fragment>
              ))}
            </div>
            <Button
              text="Portfolio"
              icon="fa fa-laptop-code"
              href="/portfolio"
            />
            <Button text="Resume" icon="fa fa-file-alt" href="/resume" />
          </div>
        </section>
      );
    }}
  </Context.Consumer>
);

export default AboutMe;
