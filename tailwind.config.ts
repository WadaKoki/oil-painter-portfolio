import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // メインカラー：ダークネイビー
        forest: {
          50:  '#eef1f7',
          100: '#d5dcec',
          200: '#aab8d9',
          300: '#7a91c2',
          400: '#4f6baa',
          500: '#324f8e',
          600: '#263d72',
          700: '#1e305c',  // ベース
          800: '#162348',
          900: '#0e1830',
        },
        // アクセント：ゴールド
        earth: {
          50:  '#fdf9ee',
          100: '#f9f0d0',
          200: '#f2dfa0',
          300: '#e8c865',
          400: '#dbb038',
          500: '#c49520',
          600: '#a37618',
          700: '#805b14',  // ベース
          800: '#614410',
          900: '#49330c',
        },
        // テキスト・サブ要素
        cream: {
          50:  '#f8fafc',
          100: '#eef2f8',
          200: '#dce6f0',
          300: '#c3d3e6',
          400: '#a4bcd8',
          500: '#87a4c8',
          600: '#6a8bb4',
          700: '#52709a',
          800: '#3f587c',
          900: '#2f4260',
        },
        // ページ背景
        canvas: '#FFFFFF',
        parchment: '#F5F5F5',
      },
      fontFamily: {
        serif: ['"Noto Serif JP"', 'Georgia', 'serif'],
        sans: ['"Noto Sans JP"', 'sans-serif'],
      },
      backgroundImage: {
        'canvas-texture': "url('/images/canvas-texture.svg')",
      },
    },
  },
  plugins: [],
};

export default config;
