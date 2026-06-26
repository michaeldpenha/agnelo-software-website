'use client';

import styles from './Typography.module.css';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'body-sm' | 'caption';
type Color = 'primary' | 'secondary' | 'muted' | 'brand';

const TAG_MAP: Record<Variant, keyof JSX.IntrinsicElements> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  body: 'p',
  'body-sm': 'p',
  caption: 'span',
};

interface Props {
  variant?: Variant;
  color?: Color;
  className?: string;
  children: React.ReactNode;
}

export function Typography({ variant = 'body', color, className, children }: Props) {
  const Tag = TAG_MAP[variant];
  const classes = [
    styles[variant.replace('-', '_')],
    color ? styles[color] : '',
    className ?? '',
  ].filter(Boolean).join(' ');

  return <Tag className={classes}>{children}</Tag>;
}
