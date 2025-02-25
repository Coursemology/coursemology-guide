import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Translate from "@docusaurus/Translate";

type FeatureItem = {
  title: JSX.Element;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: <Translate id="index.Feature.Engaging.title">Engaging</Translate>,
    Svg: require("@site/static/img/icon_engaging.svg").default,
    description: (
      <Translate id="index.Feature.Engaging.description">
        Coursemology allows educators to add gamification elements, such as
        experience points, levels and achievements to their classroom exercises
        and assignments. The gamification elements motivate students to do their
        assignments and trainings.
      </Translate>
    ),
  },
  {
    title: <Translate id="index.Feature.General.title">General</Translate>,
    Svg: require("@site/static/img/icon_general.svg").default,
    description: (
      <Translate id="index.Feature.General.description">
        It's built for all subjects. The gamification system of Coursemology
        doesn't make any assumptions on the subject. Through Coursemology, any
        teacher who teaches any subject can turn his course exercises into an
        online game.
      </Translate>
    ),
  },
  {
    title: <Translate id="index.Feature.Simple.title">Simple</Translate>,
    Svg: require("@site/static/img/icon_simple.svg").default,
    description: (
      <Translate id="index.Feature.Simple.description">
        It's built for all teachers. You don't need to have any programming
        knowledge to master the platform. Coursemology is easy and intuitive to
        use for both teachers and students.
      </Translate>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
