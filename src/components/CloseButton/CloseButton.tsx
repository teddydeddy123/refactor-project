import React from 'react';

export interface CloseButtonProps {
  onClose: () => void;
  className: string;
  label: string;
}

export const CloseButton: React.FC<CloseButtonProps> = ({
  onClose,
  className,
  label,
}) => (
  <button
    className={className}
    onClick={onClose}
    aria-label="Close"
    type="button"
  >
    {label}
  </button>
);
