import React from 'react';
import { slide as Menu } from 'react-burger-menu';

import menuLinks from '../../content/menu_links.yaml';

export default function HamburgerMenu() {
  return (
    <Menu right>
      {menuLinks.map((menulink) => (
        <a href={menulink.link.url}>{menulink.link.title}</a>
      ))}
    </Menu>
  );
}
