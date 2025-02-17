// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {

  // these strings are not yet translatable
  // https://github.com/facebook/docusaurus/issues/4542
  title: "Coursemology Guide",
  tagline: "Your role in Coursemology is",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://coursemology.org",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "coursemology", // Usually your GitHub org/user name.
  projectName: "coursemology2", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh", "ko"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/jumbotron.png",
      navbar: {
        title: "Coursemology Guide",
        logo: {
          alt: "Coursemology Logo",
          src: "img/default_logo.svg",
        },
        items: [
          {
            href: "https://coursemology.org",
            label: "Main Site",
            position: "right",
          },
          {
            href: "https://github.com/Coursemology/coursemology2",
            label: "GitHub",
            position: "right",
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `© 2013 - ${new Date().getFullYear()} Coursemology.org. All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
