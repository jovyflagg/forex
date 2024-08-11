import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" >
      <p>&copy; {currentYear} Kaipher LLC. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
