import React from 'react';

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="root-layout">
      {children}
    </div>
  );
};

export default RootLayout;