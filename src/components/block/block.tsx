import * as React from 'react';
import { createElement, CSSProperties } from 'react';

export interface BlockProps {
  style?: CSSProperties;
  children?: React.ReactNode;
}

const Block: React.FC<BlockProps> = function Block(props) {
  const { children, style } = props;

  return <div style={{width: '100%', ...style}}>{children}</div>;
};
Block.displayName = 'Block';
export default Block;
