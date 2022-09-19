

export { default } from '/home/rui/playground/lowcode-component/src/index.tsx';

import * as componentInstances from '/home/rui/playground/lowcode-component/src/index.tsx';

import '/home/rui/playground/lowcode-component/src/index.scss'

export * from '/home/rui/playground/lowcode-component/src/index.tsx';

const coveredComponents = {};

const library = 'BizComps';
const execCompile = !!false;

if (!execCompile) {
  window[library] = Object.assign({__esModule: true}, componentInstances || {}, coveredComponents || {});
}

function getRealComponent(component, componentName) {
  if (component.default) return component.default;
  if (component[componentName]) return component[componentName];
  return component;
}