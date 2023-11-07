import React from 'react';
import './styles.css';

interface CenteredContainerProps {
  children: React.ReactNode;
}

function CenteredContainer({ children }: CenteredContainerProps) {
  return <div className="container">{children}</div>;
}
export default CenteredContainer;
