import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const TextMeta: ComponentMetadata = {
  componentName: 'Text',
  title: 'Text',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'lowcode-component',
    version: '0.1.0',
    exportName: 'Text',
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
    ],
    supports: {},
    component: {},
  },
};
const snippets: Snippet[] = [
  {
    title: 'Text',
    screenshot: '',
    schema: {
      componentName: 'Text',
      props: {},
    },
  },
];

export default {
  ...TextMeta,
  snippets,
};
