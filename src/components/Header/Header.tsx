import { Link } from 'react-router-dom';
import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <Link to="/"><h1>[filesite]</h1></Link>
  );
}

export default Header;