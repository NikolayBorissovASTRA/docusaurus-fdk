// @ts-check
// Zentrale Konfiguration des ASTRA Fachhandbuchs BIM.
// Nach dem Import in GitHub müssen nur die mit "ANPASSEN" markierten Werte
// gesetzt werden – siehe README.md, Schritt 4.

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ASTRA Fachhandbuch BIM',
  tagline: 'Digitales Bauen beim Bundesamt für Strassen',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // ANPASSEN: GitHub-Organisation bzw. -Benutzername
  url: 'https://astra-docusaurus.github.io',
  // ANPASSEN: '/<Repository-Name>/' – muss exakt dem Repo-Namen entsprechen
  baseUrl: '/astra-fachhandbuch-bim/',

  // ANPASSEN: GitHub-Organisation und Repository-Name
  organizationName: 'astra',
  projectName: 'astra-fachhandbuch-bim',

  trailingSlash: false,
  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  // Mermaid-Diagramme in Markdown aktivieren (```mermaid ... ```)
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // Docs-only-Modus: das Fachhandbuch ist die Website
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // ANPASSEN: erzeugt den Link "Diese Seite bearbeiten"
          editUrl:
            'https://github.com/astra-docusaurus/astra-fachhandbuch-bim/edit/main/',
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'ASTRA Fachhandbuch BIM',
        items: [
          {
            href: 'https://github.com/astra-docusaurus/astra-fachhandbuch-bim',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `© ${new Date().getFullYear()} ASTRA – Bundesamt für Strassen · Fachhandbuch BIM (Arbeitsstand)`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
