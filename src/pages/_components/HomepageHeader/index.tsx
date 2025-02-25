import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";

import styles from "./styles.module.css";
import Translate from "@docusaurus/Translate";

export default function HomepageHeader() {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title"><Translate id="config.title"> Coursemology Guide </Translate></h1>
        <p className="hero__subtitle"><Translate id="config.tagline"> Your role in Coursemology is </Translate></p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/student-guide"
          >
            <Translate id="index.HomepageHeader.Student">Student</Translate>
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/instructor-guide"
          >
            <Translate id="index.HomepageHeader.Instructor">Instructor</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}
