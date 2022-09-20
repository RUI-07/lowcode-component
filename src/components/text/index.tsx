import * as React from 'react';
import { CSSProperties, ReactNode, createElement } from 'react';

export interface LinkProps {
  style?: CSSProperties;
  children: ReactNode;
  content?: string;
}
const Text: React.FC<LinkProps> = function Text(props) {
  const { style, content } = props;

  return <span style={style}>{content || props.children}</span>;
};

Text.displayName = 'Text';
export default Text;
