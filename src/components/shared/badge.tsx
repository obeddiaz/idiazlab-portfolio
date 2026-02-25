import React from 'react';
import classnames from 'classnames';

import s from './badge.module.scss';

type BadgeVariant = 'filled' | 'outline';

interface BadgeProps extends React.PropsWithChildren {
  variant?: BadgeVariant;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'filled', className }) => (
  <span data-variant={variant} className={classnames(s.badge, className)}>
    {children}
  </span>
);

export default Badge;
