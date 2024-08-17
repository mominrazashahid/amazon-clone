import { Header } from 'antd/lib/layout/layout';
import React from 'react';
import { Navbar } from 'react-bootstrap';

const HeaderWithNavbar = ({ children }) => (
  <div>
    <Header />
    <Navbar />
    <main>{children}</main>
  </div>
);

export default HeaderWithNavbar;
