import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';
import s from './button-link.module.scss';

interface ButtonLinkProps extends React.PropsWithChildren {
  href: HTMLAnchorElement['href'];
  variant?: 'primary' | 'ghost';
  external?: boolean;
  target?: HTMLAnchorElement['target'];
  className?: string;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  children,
  variant = 'primary',
  external,
  target,
  className,
}) => {
  const classes = classNames(s.button, className);

  if (external) {
    return (
      <a className={classes} data-variant={variant} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} data-variant={variant} href={href} target={target}>
      {children}
    </Link>
  );
};

export default ButtonLink;
