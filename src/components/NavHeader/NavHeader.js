import React from 'react';

import './Footer.css';

import { PATH } from '../../constants/paths';
import { FooterNavLink } from './components/FooterNavLink';

const footerMenu = [
  {
    to: PATH.about,
    title: 'About'
  },
  {
    to: PATH.contact,
    title: 'Contact'
  },
  {
    to: PATH.careers,
    title: 'Careers'
  }
];

export const Footer = () => (
  <footer className="footer">
    <nav className="footer__menu">
      {footerMenu.map(({ to, title }) => (
        <FooterNavLink key={to} to={to}>
          {title}
        </FooterNavLink>
      ))}
    </nav>
    <p>&copy; FoxTok</p>
  </footer>
);
