import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <div className='footer'>
        <span className="clickText">About</span>
        <span className="clickText">Privacy</span>
        <span className="clickText">Terms and Service</span>
    </div>
  );
};

export default Footer;