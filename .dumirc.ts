import { defineConfig } from 'dumi';
import { Github } from 'lucide-react';

import { homepage } from './package.json';

const isWin = process.platform === 'win32';

const themeConfig = {
  actions: [
    {
      icon: Github,
      link: homepage,
      openExternal: true,
      text: 'Github',
    },
    {
      link: 'https://github.com/lobehub/lobe-chat',
      text: 'Try it on LobeChat',
      type: 'primary',
    },
  ],
  footer: 'Made with 🤯 by LobeHub',
  name: 'Web Crawler',
  socialLinks: {
    discord: 'https://discord.gg/AYFPHvv2jT',
    github: homepage,
  },
};

export default defineConfig({
  extraBabelPlugins: ['babel-plugin-antd-style'],
  favicons: [
    'https://registry.npmmirror.com/@lobehub/assets-emoji/1.3.0/files/assets/spider-web.webp',
  ],
  mfsu: isWin ? undefined : {},
  npmClient: 'pnpm',
  outputPath: 'docs-dist',
  styles: [
    `html, body { background: transparent;  }

  @media (prefers-color-scheme: dark) {
    html, body { background: #000; }
  }`,
  ],
  themeConfig,
  title: 'Web Crawler - Lobe Chat Plugin',
});
