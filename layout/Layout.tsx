import React, { FC } from 'react';
import Header from 'components/Header';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <div className="content">{children}</div>
    </>
  );
};

export default Layout;
