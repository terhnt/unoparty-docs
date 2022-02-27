// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Unoparty',
  tagline: 'Unobtanium Protocol Docs',
  url: 'http://docs.unoparty.io',
  baseUrl: '/unoparty-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'terhnt', // Usually your GitHub org/user name.
  projectName: 'unoparty-docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/terhnt/unoparty-docs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Unoparty',
        logo: {
          alt: 'Unoparty Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Basics',
          },
          {to: '/docs/wallets/unowalletfaq', label: 'Wallets', position: 'left'},
          {to: '/docs/advanced/architecture', label: 'Advanced', position: 'left'},
          {to: '/docs/develop/main', label: 'Develop', position: 'left'},
          {
            href: 'https://github.com/terhnt/unoparty-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Basics',
                to: '/docs/intro',
              },
              {
                label: 'Advanced',
                to: 'docs/advanced/architecture'
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/unoparty',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/unobtanium',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/unopartyXUP',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/terhnt/unoparty-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Unoparty, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
