import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const BlockMeta: ComponentMetadata = {
  "componentName": "Block",
  "title": "Block",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "lowcode-component",
    "version": "0.1.0",
    "exportName": "Block",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "style",
            "zh-CN": "样式",
          }
        },
        "name": "style",
        "setter": {
          "componentName": "StyleSetter",
        }
      },
    ],
    "supports": {},
    "component": {}
  }
};
const snippets: Snippet[] = [
  {
    "title": "Block",
    "screenshot": "",
    "schema": {
      "componentName": "Block",
      "props": {}
    }
  }
];

export default {
  ...BlockMeta,
  snippets
};
