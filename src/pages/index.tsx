import React from "react";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/pages/_components/HomepageFeatures";
import HomepageHeader from "./_components/HomepageHeader";

export default function Home(): JSX.Element {
  return (
    <Layout
      title={"Home"}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
