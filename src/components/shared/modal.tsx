'use client';

import * as React from 'react';
import { createPortal } from 'react-dom';
import cn from 'classnames';
import { X as XIcon } from 'lucide-react';

import s from './modal.module.scss';
import Typography from './typography';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  overlayClassName?: string;
};

export default function Modal({
  open,
  onClose,
  title,
  description,
  children,
  className,
  overlayClassName,
}: ModalProps) {
  const panelRef = React.useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  React.useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  React.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  React.useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => {
      panelRef.current?.focus();
    }, 0);
    return () => window.clearTimeout(t);
  }, [open]);

  if (!mounted || !open) return null;

  return createPortal(
    <div className={cn(s.modal, overlayClassName)} aria-hidden="false">
      <button aria-label="Close modal" className={s.backdrop} onClick={onClose} type="button" />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={title ?? 'Modal'}
        tabIndex={-1}
        className={cn(s.dialog, className)}
      >
        <div className={s.head}>
          <div>
            {title ? <Typography.Title as="h2">{title}</Typography.Title> : null}
            {description ? <Typography>{description}</Typography> : null}
          </div>
          <button aria-label="Close modal" type="button" onClick={onClose} className={s.closeBtn}>
            <XIcon />
          </button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>,
    document.body,
  );
}
