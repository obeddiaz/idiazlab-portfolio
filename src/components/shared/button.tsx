'use client';

import React from 'react';
import cn from 'classnames';
import s from './button.module.scss';

export type ButtonVariant = 'primary' | 'ghost';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className,
  type = 'button',
  disabled,
  ...props
}) => {
  return (
    <button
      type={type}
      className={cn(s.button, className)}
      data-variant={variant}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
