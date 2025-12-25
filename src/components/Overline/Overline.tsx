import React from 'react';

export interface OverlineProps {
  text: string;
  className: string;
}

export const Overline: React.FC<OverlineProps> = ({ text, className }) => (
  <div className={className}>{text}</div>
);
