import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const LinkMeta: ComponentMetadata = {
  componentName: 'Link',
  title: 'Link',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'lowcode-component',
    version: '0.1.0',
    exportName: 'Link',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'style',
            'zh-CN': '样式',
          },
        },
        name: 'style',
        setter: {
          componentName: 'StyleSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'content',
            'zh-CN': '内容',
          },
        },
        name: 'content',
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'link',
            'zh-CN': '链接',
          },
        },
        name: 'href',
        setter: {
          componentName: 'StringSetter',
        },
      },
    ],
    supports: {},
    component: {},
  },
};
const snippets: Snippet[] = [
  {
    title: 'Link',
    screenshot: '',
    schema: {
      componentName: 'Link',
      props: {},
    },
  },
];

export default {
  ...LinkMeta,
  snippets,
};
