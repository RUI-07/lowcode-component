import * as React from 'react';
import { CSSProperties, ReactNode, createElement } from 'react';

export interface LinkProps {
  style?: CSSProperties;
  children: ReactNode;
  content?: string;
  href?: string;
}
const Link: React.FC<LinkProps> = function Link(props) {
  const { style, content, href } = props;

  return <a href={href} style={style}>{content || props.children}</a>;
};

Link.displayName = 'Link';
export default Link;
