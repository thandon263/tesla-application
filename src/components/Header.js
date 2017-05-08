import React from 'react';
import '../css/Header.css';
import logoUrl from '../../public/assets/logo.svg';

const Header = () => (
  <div className="header">
    <img src={logoUrl} alt="Tesla" />
  </div>
)
export default Header;
