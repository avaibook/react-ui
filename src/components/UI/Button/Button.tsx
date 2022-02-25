import React from 'react';

export interface ButtonProps {
  children: React.ReactNode
}

export function Button({ children }: ButtonProps): React.ReactNode {
  return (
    <button type="button">{children}</button>
  );
}
