import React from 'react';
import cn from 'classnames';
import s from './card.module.scss';

interface CardProps extends React.PropsWithChildren {
  className?: string;
  interactive?: boolean;
}

const Card: React.FC<CardProps> = ({ children, interactive, className }) => {
  return (
    <div className={cn(s.card, { [s.interactive]: interactive }, className)}>
      <div className={s.overlay} aria-hidden="true">
        <div className={s.glow} />
      </div>
      <div className={cn('relative', s.content)}>{children}</div>
    </div>
  );
};

export default Card;
