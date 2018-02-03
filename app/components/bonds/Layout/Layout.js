import React, { PropTypes, Component } from 'react';
import Header from '../../molecules/Header/Header';
import Footer from '../../molecules/Footer/Footer';

function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
