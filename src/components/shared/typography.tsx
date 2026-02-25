import React from 'react';
import cn from 'classnames';

import s from './typography.module.scss';

const mutedStyle = { color: `rgb(var(--muted))` };

type SharedProps = {
  className?: string;
} & React.PropsWithChildren;

type TypographyProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  muted?: boolean;
  as?: React.ElementType;
} & SharedProps;

const Typography: React.FC<TypographyProps> & { Title: React.FC<TitleProps> } = ({
  children,
  className,
  size = 'md',
  muted = true,
  as: Component = 'p',
}) => {
  return (
    <Component
      className={cn(s.typography, s[size], className)}
      style={muted ? mutedStyle : undefined}
    >
      {children}
    </Component>
  );
};

type TitleProps = {
  as?: 'h1' | 'h2' | 'h3';
} & SharedProps;

const Title: React.FC<TitleProps> = ({ children, className, as = 'h1' }) => {
  const Component = as;

  return <Component className={cn(s.title, s[as], className)}>{children}</Component>;
};

Typography.Title = Title;

export default Typography;
