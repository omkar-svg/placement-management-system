import React from 'react';
import './Footer.css';

// Generic footer. Pages pass in their own copyright/links text as props
// so it stays reusable rather than hard-coding one page's data here.
function Footer({ copyright, links = [] }) {
  if (!copyright && links.length === 0) return null;

  return (
    <footer className="app-footer">
      <span>{copyright}</span>
      {links.length > 0 && <span className="app-footer__links">{links.join(' | ')}</span>}
    </footer>
  );
}

export default Footer;
