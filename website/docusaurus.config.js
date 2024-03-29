// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Docus Mock',
  tagline: 'A binary xPack with the Docus Mock executables',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://xpack-dev-tools.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docus-mock-xpack/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'xpack-dev-tools', // Usually your GitHub org/user name.
  projectName: 'docus-mock-xpack', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/xpack-dev-tools/docus-mock-xpack/edit/xpack/website/',
          showLastUpdateAuthor: true,
          // Equivalent to `enableUpdateTime`.
          showLastUpdateTime: true,
          },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'The xPack Project',
        logo: {
          alt: 'Docus Mock Logo',
          src: 'img/components-256.png',
          href: 'https://xpack.github.io/',
          target: '_self',
        },
        items: [
          {
            to: '/',
            // label: 'Home',
            className: 'header-home-link',
            position: 'left'
          },
          {
            type: 'doc',
            docId: 'overview',
            label: 'Docs',
            position: 'left'
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          {
            href: 'https://github.com/xpack-dev-tools/docus-mock-xpack/',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
          {
            href: 'https://github.com/xpack-dev-tools/',
            label: 'xpack-dev-tools',
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
                label: 'Install',
                to: '/docs/install',
              },
              {
                label: 'Support',
                to: '/docs/support',
              },
              {
                label: 'Releases',
                to: '/docs/releases',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/xpack',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/kbzWaJerFG',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/xpack_project',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/xpack-dev-tools/docus-mock-xpack/',
              },
              {
                label: 'xpack-dev-tools',
                href: 'https://github.com/xpack-dev-tools/',
              },
                ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Liviu Ionescu. Built with <a href=https://docusaurus.io>Docusaurus</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // https://docusaurus.io/docs/api/themes/configuration
      colorMode: {
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
