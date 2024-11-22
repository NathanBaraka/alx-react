import React, { useContext } from 'react';
import AppContext from '../App/AppContext';
import './Footer.css';

const Footer = () => {
  const { user } = useContext(AppContext);

  return (
    <div className="footer">
      <p>Copyright © 2023 - Holberton School</p>
      {user.isLoggedIn && (
        <p>
          <a href="/contact" id="contact-link">
            Contact us
          </a>
        </p>
      )}
    </div>
  );
};

export default Footer;

