import React from 'react';

export interface MessageProps {
  text: string;
  className: string;
}

export const Message: React.FC<MessageProps> = ({ text, className }) => (
  <div className={className}>{text}</div>
);
